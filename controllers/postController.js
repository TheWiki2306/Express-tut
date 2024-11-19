let posts = [
    {id: 1, title: 'post one'},
    {id: 2, title: 'post two'},
    {id: 3, title: 'post three'}
]

// Get all posts
// GET /api/posts
export const getPosts = (req, res, next) => {
        const limit = parseInt(req.query.limit)

        if (!isNaN(limit) && limit > 0){
            return res.status(200).json(posts.query.limit);
        }

        res.status(200).json(posts)
    
}

// Get single post
// GET api/post/id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
}

// Post a post
// POST /api/posts
export const createPost = (req, res, next) => {
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
}

// update post
// PUT /api/posts/id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}

// delete post 
// DELETE /api/posts/id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        return next(error);    
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}

// export {getPosts, getPost, createPost, updatePost, deletePost};