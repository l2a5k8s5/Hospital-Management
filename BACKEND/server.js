// import app from './app.js'
// import cloudinary from "cloudinary"

// cloudinary.v2.config({
//     cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_API_SECRET
// })

// app.listen(process.env.PORT,()=>{
//     console.log("server is running on port 4000");
// })


import app from './app.js';   // Import your app
import cloudinary from 'cloudinary';
import cors from 'cors';  // Import the CORS package

// Configure Cloudinary with environment variables
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Use CORS middleware to enable cross-origin requests from your frontend (localhost:5174)
app.use(cors({
    origin: 'http://localhost:5174', // Allow requests from your frontend (adjust as needed)
    methods: 'GET,POST,PUT,DELETE',  // Allow these HTTP methods
    allowedHeaders: 'Content-Type,Authorization',  // Allow specific headers
}));

// Start the server on the specified port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
