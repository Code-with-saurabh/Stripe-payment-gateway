const express = require("express")
const { createCustomer, createProduct } = require("../controller/PaymentController")
const route = express.Router()

route.get("/",(req,res)=>{
    res.send("from Routes a default Route")
})

route.post("/test",createCustomer)
route.post("/testProduct",createProduct)

module.exports= route
