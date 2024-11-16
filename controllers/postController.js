// Get all posts
// GET /api/posts
const getPost = (req, res) => {
    const limit = parseInt(req.query.limit)

    if (!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.query.limit);
    }

    res.status(200).json(posts)
}

// Get single post
// GET api/post/id
const getSinglePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
}

const 