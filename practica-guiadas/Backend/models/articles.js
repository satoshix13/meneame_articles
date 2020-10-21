const articleSchema = require('./schemas/article-schema')
const mongoose = require('mongoose')


module.exports = mongoose.model('articles', articleSchema)
