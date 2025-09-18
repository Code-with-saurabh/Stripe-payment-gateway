require("dotenv").config()

module.exports = {
    PORT:process.env.PORT,
    SECRET_KEY:process.env.SECRET_KEY,
    PUBLISHABLE_KEY:process.env.PUBLISHABLE_KEY,
}