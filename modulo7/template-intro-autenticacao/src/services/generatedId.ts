import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }

  const id = v4();

console.log("Generated Id: ", id);

// Exercício 01) a. Concordo pois fica mais diversificado o ID.
