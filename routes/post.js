import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js';

const router = express.Router();

// GET all posts
router.get('/', getPosts)

// GET single post
router.get('/:id', getPost)

// POST a post
router.post('/', createPost)

// UPDATE a post - PUT
router.put('/:id', updatePost)

// Delete Post 
router.delete('/:id', deletePost)

export default router;