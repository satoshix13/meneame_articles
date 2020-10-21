const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const md5 = require('md5')
const PASSWORD = process.env.TOKEN_PASSWORD
const Users = require('../models/users')


async function login(req,res){
  const credentials = req.body

    const searchParams = {
        email: credentials.email,
        password: md5(credentials.password)
    }

    const user = await Users.findOne(searchParams).exec()

    if (!user){
        res.status(401).json({message: "Usuario no válido"})
        return
    }
    const payload = {
        id: user._id,
        firstname: user.name,
        profile: user.profile
    }

    const token = jwt.sign(payload, PASSWORD)

    res.json({ token })
}





router.route('/login/')
      .post(login)






module.exports = router
