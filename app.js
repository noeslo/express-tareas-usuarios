let express = require ("express");
let routerTasks = require ("./routers/routerTasks");
let routerUsers =  require ("./routers/routerUsers");
let app= express();

app.listen(8081,()=>{
    console.log("servidor activo");
})

//para registrar un router entero,primero se le pasa una 
//url base que se le puede dar a todo el router
//para url base app.use("/",routerTasks);
//lo normal si se pone aquí es quitarla del router para no duplicarlo

app.use("/tasks",routerTasks);
app.use("/users",routerUsers);











