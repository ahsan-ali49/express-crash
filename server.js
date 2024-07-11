const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

let posts = [
    {id:1, title: "Post One"},
    {id:2, title: "Post Two"},
    {id:3, title: "Post Three"},
]

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/posts", (req, res)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0, limit));
    }else{
        res.json(posts);
    }
})

// Get Single Post
app.get("/api/posts/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter(post=>post.id === id));
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));