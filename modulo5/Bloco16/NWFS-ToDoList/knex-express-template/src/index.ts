import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Task, Users } from "./types"

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());



app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {

    const { name, nickname, email } = req.body

    const newUser: Users = {
      id: Number(Date.now()), name, nickname, email
    }

    if (!name || !nickname || !email) {
      throw new Error("Cadastro incompleto!!");
    }

    await connection.raw(`
            INSERT INTO ToDoListUsers (id, name, nickname, email) 
            VALUES (${newUser.id}, "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
        `)

    res.status(200).send("Usuário Cadastrado!")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
});

app.get ("/user/:id", async (req: Request, res: Response)=>{
  let errorCode = 400

  try {
      const id = Number(req.params.id)
      if (id) {
        const result = await connection.raw(`
          SELECT * FROM ToDoListUsers
          WHERE id = "${id}";
        `)
  
        return res.status(200).send(result[0])
      }
  
      const result = await connection.raw(`
        SELECT * FROM ToDoListUsers
      `)
  
      res.status(200).send(result[0])
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })

app.put ("/user/edit/:id", async  (req: Request, res: Response)=>{
  let errorCode = 400
  try {
      const user_id = Number(req.params.id)
      const {name, nickname } = req.body
      if (!name || !nickname){
          errorCode = 422
          throw new Error("Precisa colocar nome e apelido para fazer a alteração.");
      }
      await connection.raw (`
      UPDATE TodoListUser
      SET name = "${name}", nickname = "${nickname}"
      WHERE id = ${user_id}
      `);
      res.status(200).send("Usuário Alterado!")
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
});

app.post ("/task", async  (req: Request, res: Response)=>{
  let errorCode = 400
  try {
      const {title, description, limit_date, creator_user_id} = req.body
      const newTask: Task = {
          id: Date.now(), title, description, limit_date, creator_user_id
      }
      if(!title || !description || !limit_date || !creator_user_id){
          errorCode = 422
          throw new Error("Precisa do titulo, descrição e data limite");
      }
      await connection.raw(`
      INSERT INTO ToDoListTask (id, title, description, limit_date, creator_user_id)
      VALUES (${newTask.id}, "${newTask.title}", "${newTask.description}", STR_TO_DATE ("${newTask.limit_date}", '%d/%m/%Y'),
      "${newTask.creator_user_id}")
      `)
      res.status(200).send("Tarefa Criada!")
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
});

app.get ("/task/:id", async  (req: Request, res: Response)=>{
  let errorCode = 400
  try {

      const id = Number(req.params.id)

      const resposta = await connection.raw (`
      SELECT * FROM ToDoListTask
      WHERE id = ${id};
     `)

      const creatorUserNickname = await connection.raw (`
      SELECT nickname From ToDoListUsers
      WHERE id = ${id}
      `)

      const bodyResposta: any = {
          resposta, creatorUserNickname
      }

      res.status(200).send(bodyResposta)

  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});