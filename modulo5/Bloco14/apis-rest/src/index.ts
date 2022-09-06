import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Usuarios, USUARIO_TYPE } from "./lista";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/usuarios", (req:Request, res: Response) => {
    let errorCode = 400

    try {
        const name = req.query.name as string
        
        if (!name) {
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!!");                        
        }
        const usuario = users.find((u) => {
            return u.name.toLowerCase() === name.toLocaleLowerCase()
        })
        if (!usuario) {
            errorCode = 404
            throw new Error("Usuário não encontrado!!");          
        }
        res.status(200).send(usuario)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/usuarios/:id", (req: Request, res: Response) => {
        let errorCode = 500
        try {
          const id = Number(req.params.id)
      
          if (isNaN(id)) {
            errorCode = 422
            throw new Error("Id precisa ser um number!");
          }
      
          const user = users.filter((u) => { 
            return u.id === id
          })
      
          if (!user.length) {
            errorCode = 404
            throw new Error("Usuário não encontrado");
          }
      
          res.status(200).send(user)
      
        } catch (error: any) {
          res.status(errorCode).send(error.message)
        }
})

app.post('/usuarios', (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const { name, email, type, age } = req.body
  
      if (!name || !email || !type || !age) {
        errorCode = 422
        throw new Error("Ausência de parâmetros no body");
      }
  
      if (type.toUpperCase() !== USUARIO_TYPE.ADMIN && type.toUpperCase() !== USUARIO_TYPE.NORMAL) {
        errorCode = 422
        throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
      }
  
      const newUser: Usuarios = {
        id: Date.now(),
        name: name,
        email: email,
        type: type,
        age: age
      }
  
      users.push(newUser)
  
      res.status(200).send({ message: 'Usuário criado com sucesso!', users })
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })

app.put('/usuarios', (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const { name, email, type, age } = req.body
  
      if (!name || !email || !type || !age) {
        errorCode = 422
        throw new Error("Ausência de parâmetros no body");
      }
  
      if (type.toUpperCase() !== USUARIO_TYPE.ADMIN && type.toUpperCase() !== USUARIO_TYPE.NORMAL) {
        errorCode = 422
        throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
      }
  
      const newUser: Usuarios = {
        id: Date.now(),
        name: name,
        email: email,
        type: type,
        age: age
      }
  
      users.push(newUser)
  
      res.status(200).send({ message: 'Usuário criado com sucesso!', users })
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })





















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});