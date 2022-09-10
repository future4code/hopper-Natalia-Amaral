import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Users } from "./types"

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





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});