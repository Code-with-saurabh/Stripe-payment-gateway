const express = require("express")
const app = express();
const {PORT}  = require("./utilities/config")
const cors = require("cors")
const PaymentRoute = require("./Router/PaymentRoute")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("default Route")
})


app.use("/api/payment",PaymentRoute)





app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})