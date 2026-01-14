const express = require('express');
//const logger = require('../middleware/logger');
const router = express.Router();
const Post = require('../models/Post')

//let posts = [
    //{id:1,title: 'post one'},
    //{id:2, title: 'post two'}
//]


//get all post
router.get('/',async(req,res)=>{
    const posts = await Post.find();
    res.json(posts);
});

//manually send the stats code res.status().json()
//get sinlge post
router.get('/:id',async(req,res,)=>{
    //console.log(req.params.id);
    //const id = parseInt(req.params.id);
    const post = await Post.findById(req.params.id);
    
    if (!post){
        return res.status(404).json({msg: `a post with the ${id} is not found `})
    }
    res.status(200).json(post);
});

//create new post 
/*router.post('/', async(req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ msg: 'Title is required' });
    }

    /*const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: req.body.title
    };

    posts.push(newPost);
    res.status(201).json(newPost);*/
    /*const post = await Post.create({ title: req.body.title });
    res.status(201).json(post);
});*/


//update post 
router.post('/', async (req, res) => {
    console.log('BODY:', req.body); // 👈 DEBUG

    if (!req.body || !req.body.title) {
        return res.status(400).json({ msg: 'Title is required' });
    }

    const post = await Post.create({
        title: req.body.title
    });

    res.status(201).json(post);
});


router.put('/:id',async(req,res)=>{
    //const id = parseInt(req.params.id)
    // post = posts.find((post)=> post.id === id);
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title },
        { new: true, runValidators: true }
    );

    if (!post){
        return res.status(404).json({msg:`a post with this ${id} is not found`})
    }
    /*if (!req.body.title) {
        return res.status(400).json({ msg: 'Title is required' });
    }
    post.title = req.body.title;*/
    res.status(200).json(posts);
})

router.delete('/:id',async(req,res)=>{
    //const id = parseInt(req.params.id)
    //const post = posts.find((post)=> post.id === id);
      const post = await Post.findByIdAndDelete(req.params.id);

    if (!post){
        return res.status(404).json({msg:`a post with this ${id} is not found`})
    }
    
    //posts = posts.filter((post)=> post.id !== id);
    //res.status(200).json(posts);
    res.json({msg: 'post deleted'})
})
module.exports = router;