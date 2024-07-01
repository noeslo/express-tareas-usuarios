let express = require ("express");
let routerTasks = express.Router();

let tasks = require("../data/tasks");

//Para mostrar los datos siempre usamos una petición get
//previa definición de la url que queremos darle

routerTasks.get("/", (req,res)=>{
    res.send(tasks);
    let text =req.query.text;   

    if (text!=undefined){
        //Así sería texto exactamemte igual
        //let task=tasks.filter(task => task.text==taskText);

        //Así sería texto que lo contenga
        let taskWithText=tasks.filter(task => task.text.indexOf(text)!=-1);
        res.send(taskWithText);
        return;        s
    }
    res.send(tasks);
   
})

//parámetros
routerTasks.get("/:id", (req,res)=>{
    let id=req.params.id;
    let task=tasks.find((t) => t.id==id);
    if (task==undefined){
        res.send("Error")
        return;
    }
    else{
        res.send(task);
    }
   
})


module.exports = routerTasks;