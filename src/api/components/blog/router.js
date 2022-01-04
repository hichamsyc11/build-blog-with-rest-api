const router = require('express').Router()
const {postBlogController , updateBlogController} = require('./controller')
const {createNewPost 
    , getNewPost
    , UpdatePost
    , deletePost
    , getAllPosts} = require('./service')

// get All Posts 
router.get('/' ,getAllPosts )

// get single post route by id   
router.get("/:id",getNewPost )

// post route for create new post
router.post('/create' ,postBlogController, createNewPost )

// post put for update article
router.put('/:id/edit' , updateBlogController,UpdatePost )

// post delete for remove a single post router
router.delete('/:id/delete' , deletePost)

module.exports = router