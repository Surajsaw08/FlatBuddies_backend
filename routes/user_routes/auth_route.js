import express from 'express';
import { signup, login } from '../../controllers/user_controller/auth_controller.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);



export default router;