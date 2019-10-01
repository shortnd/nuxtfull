const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

router.get('/api/posts', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) { res.send({ err }) }
    res.send(posts)
  })
})

router.post('/api/posts', (req, res) => {
  const { title, body } = req.body
  Post.create({
    title,
    body
  }, (err, post) => {
    if (err) { res.send(err) }
    res.send(post)
  })
})

router.get(`/api/posts/:id`, (req, res) => {
  const { id } = req.params
  Post.findById(id, (error, post) => {
    if (error) { res.send(error) }
    res.send(post)
  })
})

router.put(`/api/posts/:id`, (req, res) => {
  const { id } = req.params
  const { title, body } = req.body
  Post.findOneAndUpdate({ _id: id }, { title, body }, (error, post) => {
    if (error) { res.send(error) }
    res.send(post)
  })
})

router.delete(`/api/posts/:id`, (req, res) => {
  const { id } = req.params
  Post.findOneAndDelete({ _id: id }, (error, post) => {
    if (error) { res.send(error) }
    res.send({ message: `Post ${id} deleted` })
  })
})

module.exports = router
