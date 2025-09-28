import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messagesRoutes from './routes/message.route.js';
import path from 'path';
import connectToMongoDB from './lib/db.js';
import { ENV } from './lib/env.js';

const app = express();
const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies. To get the fields from user send. lets say login, we need username, password, email basically req.body
app.use(cookieParser()); // Middleware to parse cookies
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);

if (ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToMongoDB();
});
