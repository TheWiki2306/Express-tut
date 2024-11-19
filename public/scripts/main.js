// import { application, json } from "express";

const output = document.querySelector('#output');
const button = document.querySelector('#get-posts');
const secondButton = document.querySelector('#add-post-form');

// Get posts
async function showPosts() {
    try {
        const res = await fetch('http://localhost:8080/api/posts');
        if(!res.ok){
            throw new Error('Failed to fetch post');
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach(post => {
            const postElements = document.createElement('div');
            postElements.textContent = post.title;
            output.appendChild(postElements);
        });
    } catch (error) {
        console.log('Error fetch posts: ', error);   
    }
}


// Submit new post 
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        })

        if (!res.ok) {
            throw new Error('Failed to add post') 
        }

        const newPost = await res.json();

        const postElement = document.createElement('div');
        postElement.textContent = newPost.title;
        output.appendChild(postElement);
        showPosts();
    } catch (error) {
        console.error('Error');
        
    }
}

button.addEventListener('click', showPosts);
secondButton.addEventListener('submit', addPost);
