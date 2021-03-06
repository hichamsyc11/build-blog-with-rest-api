// main file for application dependencies and middlewares
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const createError = require('http-errors')
const morgan = require('morgan')
// setup dotenv for environment variable
require('dotenv').config()

// setup express-rate-limit limit repeated requests
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    handler:(req,res)=>{
        return res.status(429).json({
            error:'You sent too many requests. Please wait a while then try again'
        })
    }
})
app.use("/api", apiLimiter)
 
// setup morgan logger 
app.use(morgan('dev'))

// setup helmet for setting various HTTP headers
app.use(helmet())

// enable cors for application
app.use(cors())

// enable express to parse request body of type application/json
app.use(express.json())

// connect to mongodb database
require('../helpers/db_helper')

// setup main route
app.use("/api",routes)

// 404 route
app.use((req,res,next)=>{
    next(createError.NotFound())
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        error:{
            status: err.status,
            message: err.message
        }
    })
})

// export app
module.exports = app