import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: 'post one'},
    {id: 2, title: 'post two'},
    {id: 3, title: 'post three'}
]


// GET all posts
router.get('/')

// GET single post
router.get('/:id')

// POST a post
router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
      const error = new Error('Does not contain title');
      error.status = 400;
      return next(error)
    }

    posts.push(newPost);
    res.status(200).json(posts);
})

// UPDATE a post - PUT
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
})

// Delete Post 
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);    
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
})
export default router;