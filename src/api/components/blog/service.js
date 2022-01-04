const Blogmodel = require('./model')


// get all posts
exports.getAllPosts = async(req , res , next )=>{
    try {
        const getBlogs = await Blogmodel.find().sort(1)
        res.status(200).json({
            result : getBlogs,
            message : 'this is all articles you have'
        })
    } catch (err) {
        next(err)
    }
}

// this is logic for create new post
exports.createNewPost = async(req , res , next)=>{
    const newPost = {
        title: req.body.title,
        author : req.body.author,
        content : req.body.content
    }
      
    try {
        const Blog = new Blogmodel(newPost)
        const savePost = await Blog.save()
        console.log('test :' , savePost)

        res.status(201).json({
            author : savePost.author ,
            title : savePost.title ,
            message : 'create post was a successfully',
            id : savePost.id
        })
    } catch (err) {
        next(err)
    }
   
}

// this is get new post middelware

exports.getNewPost = async(req , res , next)=>{
    try {
        const getSignlePost = await Blogmodel.findById(req.params.id)
        console.log('id of new post : ' ,getSignlePost)

        res.status(200).json({
            result : getSignlePost,
            message : 'this is your signle post'
        })

    } catch (err) {
        next(err)
    }

}

// this is update post middelware

exports.UpdatePost = async(req , res , next)=>{
    try {
        const postId = req.params.id
        const updateNewPost = await Blogmodel.findOneAndUpdate({_id : postId },{$set:req.body},{new : true})

        console.log('update :' , updateNewPost)
        res.status(200).json({
            update : updateNewPost,
            message: 'this post was update right now'
        })

    } catch (err) {
        next(err)
    }
}

// this is delete a single post
exports.deletePost = async(req , res , next)=>{
    try {
        const postId = req.params.id
        const deleteSingelPost = await Blogmodel.deleteOne({
            postId : postId,
        })

        console.log('update :' , deleteSingelPost)
        res.status(200).json({
            update : deleteSingelPost,
            message: 'this post was delete right now'
        })

    } catch (err) {
        next(err)
    }
}