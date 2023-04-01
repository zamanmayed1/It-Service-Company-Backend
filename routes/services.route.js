const express = require('express')
const { getAllService, saveAService, updateAService, getAService, deleteAService } = require('../controllers/services.controller')

const router  = express.Router()

router.get('/all' , getAllService)
router.get('/detail/:id' , getAService)
router.post('/save' , saveAService)
router.patch('/update/:id' , updateAService)
router.delete('/delete/:id' , deleteAService)





module.exports = router