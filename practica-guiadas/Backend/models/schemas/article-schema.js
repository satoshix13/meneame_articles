const mongoose = require('mongoose')


module.exports = new mongoose.Schema ({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  excerpt: { type: String, required: true },
  published_at: { type: Date, default: Date.now },
  categories: [{ type: String, required: true }],
  enabled: { type: Boolean, default: true },
})
