#! /usr/bin/env node

import inquirer from "inquirer"

let todos = [];
let condition = true;

while(condition){
    let anas = await inquirer.prompt([{
        name: "todo",
        type: "input",
        message: "what you want to add in your Todos",
    },
    {
        name: "check",
        type: "confirm",
        message: "Are you sure",
        default: false,
    },
    {
        name: "confirmation",
        type: "list",
        message: "Do want add more?",
        choices: ["Add","Remove"],
    },
    ]);
    if(anas.confirmation === "Add"){
    todos.push(anas.todo);
    condition = anas.check;
    console.log(todos);
}
else if(anas.confirmation === "Remove"){
    todos.pop();
    condition = anas.check;
    console.log(todos);
}
}








