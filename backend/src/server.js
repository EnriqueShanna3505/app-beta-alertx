import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messagesRoutes from './routes/message.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies. To get the fields from user send. lets say login, we need username, password, email basically req.body

app.use('/api/auth', authRoutes);

app.use('/api/messages', messagesRoutes);

app.listen(PORT, () => console.log(`Server is running on port:` + PORT));
