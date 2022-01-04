const createError = require('http-errors')
const Blog = require('./model')
const yup = require('yup')

// first we validate blog schema with yut
exports.postBlogController = async(req , res , next)=>{

    const blogSchema = yup.object({
        title: yup.string().max(255).required('title is required'),
        author: yup.string().min(6).max(30).required('author is required'),
        content: yup.string().max(3500).required('content is required'),
    })
    try {
        await blogSchema.validate(req.body)
        next()
    }
    catch (err) {
        if(err.errors){
            err.status= 422
        }
        next({
            message: error.errors,
            status: error.status || 500
        })
    }
}

// validate update blog 
exports.updateBlogController = async(req , res , next)=>{

    const blogSchema = yup.object({
        title: yup.string().max(255).required('title is required'),
        author: yup.string().min(6).max(30).required('author is required'),
        content: yup.string().max(3500).required('content is required'),
    })
    try {
        await blogSchema.validate(req.body)
        next()
    }
    catch (err) {
        if(err.errors){
            err.status= 422
        }
        next({
            message: error.errors,
            status: error.status || 500
        })
    }
}