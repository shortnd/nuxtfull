const express = require('express')
const router = express.Router()

router.get('/api/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Collin'
    }
  ])
})

module.exports = router
