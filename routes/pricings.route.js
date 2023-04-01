const express = require("express")
const { getAllPricing, saveAPricing, updateAPricing, deleteAPricing } = require("../controllers/pricings.controllers")
const router = express.Router()



router.get('/all',getAllPricing )
router.post('/save',saveAPricing)
router.patch('/update/:id' , updateAPricing)
router.delete('/delete/:id' , deleteAPricing)


module.exports = router