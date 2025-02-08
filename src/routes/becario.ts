import { Router } from 'express';
import { getBecarios } from '../controllers/becario';

const router = Router();

router.get('/',getBecarios)

export default router;