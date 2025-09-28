//CLEANUP codebase/ Code optimization for routes or endpoints

import express from 'express';
//import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

//router.post('/signup', signup); //post request to /signup endpoint will be handled by signup function in auth.controller.js, same goes for login and logout

router.get('/send', (req, res) => {
  res.send('This is message endpoint');
});

export default router;
