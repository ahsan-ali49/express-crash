import express from 'express';
import path from "path";
import {fileURLToPath} from "url";
import posts from "./routes/posts.js"
import logger from "./middleware/logger.js"
import errorHandler from "./middleware/error.js"
import notFound from "./middleware/notFound.js"

const PORT = process.env.PORT || 8000;

const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
console.log(__filename);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// logger middleware
app.use(logger);

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api/posts", posts);



// Error Handler
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));