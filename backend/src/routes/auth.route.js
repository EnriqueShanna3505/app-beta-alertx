//CLEANUP codebase/ Code optimization for routes or endpoints

import express from 'express';
import {
  signup,
  login,
  logout,
  updateProfile,
} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';

const router = express.Router();

//router.post('/signup', signup); //post request to /signup endpoint will be handled by signup function in auth.controller.js, same goes for login and logout
// router.get("/test", arcjetProtection, (req, res) =>{
//   res.status(200).json({message:"test"});
// })

//router.use(arcjetProtection); // if malas nak letak one by one like below
router.post('/signup', arcjetProtection, signup);
router.post('/login', arcjetProtection, login);
router.post('/logout', arcjetProtection, logout);

router.put('/update-profile', arcjetProtection, protectRoute, updateProfile);

router.get('/check', arcjetProtection, protectRoute, (req, res) =>
  res.status(200).json(req.user)
);

export default router;
