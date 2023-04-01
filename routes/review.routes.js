const express = require("express")
const { getAllReview, saveAReview, updateAReview, deleteAReview, getReviewsForService } = require("../controllers/reviews.controller")
const router = express.Router()



router.get('/all', getAllReview)
router.get('/reviews/:id', getReviewsForService) 
// :id will be service id
router.post('/save',saveAReview)
router.patch('/update/:id' , updateAReview)
router.delete('/delete/:id' , deleteAReview)


module.exports = router