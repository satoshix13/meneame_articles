const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const cors= require("cors")
const bearerToken = require("express-bearer-token")



if(process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const port = process.env.PORT || 8000
const app = express()





//*******Controllers********** */
const userRoutes = require('./controllers/users')
const articleRoutes = require('./controllers/articles')
const authRoutes = require('./controllers/auth')


//*****Init Function********** */

function connectDB() {
  try {
    mongoose.connect(process.env.BD, {useNewUrlParser: true, useUnifiedTopology: true}),
    console.log("Successfuly connected to DB")
  } catch(e) {
    console.log(e)
  }
}


async function init(){
  await connectDB()
  app.listen(port, () => {
    console.log(`server is open at port ${port}`)
  })
}


//********Middlewares***********//

app.use(express.json())
app.use(cors())


//**********Routes***************//

app.get('/', (req,res) => {
  res.send('good start')
})

app.use('/users', userRoutes)
app.use('/articles', articleRoutes)
app.use('/auth', authRoutes)

app.get('*', (req,res) => {
  res.send("sorry page not found!")
})




init()

