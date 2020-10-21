const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


if(process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const port = process.env.PORT || 8000
const app = express()



const userRoutes = require('./controllers/users')
const articleRoutes = require('./controllers/articles')




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


//**********Routes***************//

app.get('/', (req,res) => {
  res.send('good start')
})

app.use('/users', userRoutes)
app.use('/articles', articleRoutes)


app.get('*', (req,res) => {
  res.send("sorry page not found!")
})




init()

