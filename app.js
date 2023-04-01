const express = require("express")
const app = express()
const cors = require("cors")
const servicesRouter = require("./routes/services.route")
const postRouter = require("./routes/posts.route")
const PricingRouter = require("./routes/pricings.route")
const reviewRouter = require("./routes/review.routes")




// middlewares
app.use(express.json())
app.use(cors())


// Routes Here
// http://localhost:8080/api/v1/service/all

app.use('/api/v1/service', servicesRouter)
app.use('/api/v1/post', postRouter)
app.use('/api/v1/pricing', PricingRouter)
app.use('/api/v1/review', reviewRouter)


app.get("/api/v1/" , (req , res) => {
    res.send("It Service Company Backend Development by Zaman Mayed")
})



module.exports = app;