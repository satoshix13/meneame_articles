const express = require('express')
const router = express.Router()
const Articles = require('../models/articles')
const slugify = require('slugify')



async function listArticles(req,res){
  let list = await Articles.find().exec()
  res.json(list)
}

async function createArticle(req,res){
  let article = req.body
  article.slug = slugify(article.title)
  article.excerpt = article.body.substring(0,300)+"...."

   try {
     let newArticle = await new Articles(article).save()
     res.status(201).json(newArticle)
   } catch (e) {
     res.status(400).json({message: e})
   }
 }

 async function getArticle(req,res){
   // Obtengo la id de la url
  const articleId = req.params.id

  let list = await Articles.findById(articleId).exec()
  res.json(list)
}


router.route('/')
      .get(listArticles)
      .post(createArticle)


router.route('/:id')
  .get(getArticle)
  

module.exports = router
