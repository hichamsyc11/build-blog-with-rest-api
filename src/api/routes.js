// main file for all routes app
const router = require('express').Router()
const blogRoute = require('./components/blog/router')
// import all app routes from components folder

//const auth = require('./components/auth/route')
// authentication routes component
//router.use('/auth',auth)

//this is for get Blog router 
router.use('/blog', blogRoute)



// export router
module.exports = router