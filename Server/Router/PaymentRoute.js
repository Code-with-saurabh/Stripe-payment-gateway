const express = require("express")
const route = express.Router()

route.get("/",(req,res)=>{
    res.send("from Routes a default Route")
})


module.exports= route
