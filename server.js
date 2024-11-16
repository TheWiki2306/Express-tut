import express from 'express';
import path from 'path';
import posts from './routes/post.js';
import logger from './middleWare/logger.js';
import errorhandler from './middleWare/error.js';
import notFound from './middleWare/notFound.js';
const port = process.env.PORT || 8000;


const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);

// not found middleware
app.use(notFound);

// error middleware
app.use(errorhandler);
// let posts = [
//     {id: 1, title: 'post one'},
//     {id: 2, title: 'post two'},
//     {id: 3, title: 'post three'}
// ];

// // Get all posts
// app.get('/api/posts', (req, res) => {
//     const limit = parseInt(req.query.limit);

//     if(!isNaN(limit) && limit > 0){
//         return res.status(200).json(posts.slice(0, limit));
//     }
//         res.status(200).json(posts);
// });


// // Get single post
// app.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post => post.id === id));
//     // res.status(200).json(posts.filter((post) => post.id === id));

//     if (!post) {
//      return res.status(404).json({ Message: `Post with id: ${id}, not found` });
//     }        
    
//     res.status(200).json(post);
    
// });   

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

app.listen(port, () => console.log(`server is running on port ${port}`));