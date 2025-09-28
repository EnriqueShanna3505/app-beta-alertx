//CLEANUP codebase/ Code optimization for routes or endpoints

import express from 'express';
//import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

//router.post('/signup', signup); //post request to /signup endpoint will be handled by signup function in auth.controller.js, same goes for login and logout

router.get('/login', (req, res) => {
  res.send('This is login endpoint');
});

router.get('/signup', (req, res) => {
  res.send('This is signup endpoint');
});

router.get('/logout', (req, res) => {
  res.send('This is logout endpoint');
});

export default router;
