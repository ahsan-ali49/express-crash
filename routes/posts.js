import express from "express";
import {getPosts, getPost, createPost, updatePost, deletePost} from "../controllers/postControllers.js";

const router = express.Router();


router.get("/", getPosts)

// Get Single Post
router.get("/:id", getPost)

// Create new post
router.post("/", createPost)

// Update Post
router.put("/:id", updatePost)

// Delete Post
router.delete("/:id", deletePost)

export default router;