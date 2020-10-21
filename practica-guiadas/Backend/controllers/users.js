const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const md5 = require('md5')


async function listUsers(req,res) {
  let users = await Users.find().exec()
  let filteredList = users.map((item) => {
    item = {...item.toJSON()}
    delete item.password
    return item
  })
  res.send(filteredList)
}



async function createUser(req,res) {
  req.body.password = md5(req.body.password)

  try {
    let newUser = await new Users(req.body).save()
    let createdUser = newUser.toJSON()
    delete createdUser.password
    res.status(201).json(createdUser)
  } catch (e) {
    console.info(e)
  }
}



router.route('/')
      .get(listUsers)
      .post(createUser)



module.exports = router



