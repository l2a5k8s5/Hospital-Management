


import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './router/messageRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import userRouter from './router/userRouter.js';
import appointmentRouter from './router/appointmentRouter.js';

const app = express();


config({ path: './config/config.env' });
// app.use(cors({
//   origin: 'http://localhost:5174', 
//   credentials: true, // If you are sending cookies or authentication headers
// }));

// // Your routes
// app.get('/api/v1/user/admin/me', (req, res) => {
//   res.json({ message: 'Success' });
// });

// app.listen(4000, () => console.log('Server running on port 4000'));
// Other middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp',
  })
);

// Define your routes
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/appointment', appointmentRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
