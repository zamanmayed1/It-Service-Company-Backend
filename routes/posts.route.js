const express = require('express')
const { getAllPosts, getAPost, saveAPost, updateAPost, deleteAPost } = require('../controllers/posts.controllers')

const router  = express.Router()

router.get('/all' , getAllPosts)
router.get('/detail/:id' , getAPost)
router.post('/save' , saveAPost)
router.patch('/update/:id' , updateAPost)
router.delete('/delete/:id' , deleteAPost)





module.exports = router