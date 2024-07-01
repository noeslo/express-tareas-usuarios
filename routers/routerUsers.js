let express = require ("express");
let routerUsers = express.Router();

let users = require("../Data/users");

routerUsers.get("/", (req,res)=>{
    let email =req.query.email;
    if (email!=undefined){
        let userWithEmail=users.find((t) => t.email==email);
        if(userWithEmail!=undefined)
            res.send(userWithEmail);
        else{
            res.send("Error");
            return;
        }

    }         
    else
        res.send(users);

})

module.exports = routerUsers;
