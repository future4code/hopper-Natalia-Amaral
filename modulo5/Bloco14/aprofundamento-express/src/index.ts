import express, { Request, Response } from "express"
import cors from "cors"
import { a_fazer } from "./data"

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server is running in 3003"))

// Exercício 01
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
    return res
})

// Exercício 04
app.get("/a-fazeres", (req: Request, res: Response) => {
    const currentAFazer = a_fazer
    console.log(1, currentAFazer)

    const result = currentAFazer
    res.status(200).send(result)
})

// Exercício 05
app.post("/novo-afazer", (req: Request, res: Response) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const completed = req.body.completed;

    const newTask = {
        userId: userId,
        id: Date.now(),
        title: title,
        completed: completed
    };
    a_fazer.push(newTask);

    res.status(200).send({ a_fazer });
})

//  Exercício 06
app.put("/a-fazeres/:id", (req, res) => {
    const tarefaId = req.params.id

    const newCompleted = a_fazer.filter((tarefa) => {
        return Number(tarefaId) === tarefa.id
    }).map((tarefa) => {
        if (tarefa.completed === true) {
            return { userId: tarefa.userId, id: tarefa.id, title: tarefa.title, completed: false }
        } else if (tarefa.completed === false) {
            return { userId: tarefa.userId, id: tarefa.id, title: tarefa.title, completed: true }
        }
    })
    console.log(newCompleted)
    res.status(201).send(newCompleted);
})

// Exercício 07 
app.delete("/deletar-afazer/:id", (req: Request, res: Response) => {
    const deletarAfazer = a_fazer.filter(task => {
        return task.id !== Number(req.params.id)
    });
    res.status(202).send(deletarAfazer)
});

//  Exercícios 08
app.get("/a-fazer/user/:userId", (req, res) => {
    const userIds = a_fazer.filter(task => {
        return task.userId === Number(req.params.userId);
    });

    res.status(200).send(userIds);
});