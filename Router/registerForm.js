import express from 'express';
import RegisterController from '../Controller/RegisterController.js';

const router= express.Router();



router.post('/register',RegisterController.RegisterForm);

export default router;
