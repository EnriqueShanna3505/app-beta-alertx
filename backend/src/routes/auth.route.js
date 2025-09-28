//CLEANUP codebase/ Code optimization for routes or endpoints

import express from 'express';
import {
  signup,
  login,
  logout,
  updateProfile,
} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

//router.post('/signup', signup); //post request to /signup endpoint will be handled by signup function in auth.controller.js, same goes for login and logout

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.put('/update-profile', protectRoute, updateProfile);

router.get('/check', protectRoute, (req, res) =>
  res.status(200).json(req.user)
);

export default router;
