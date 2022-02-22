import { Router } from 'express';
import * as controller from '../controllers/phones.controller';

export const router = Router();

router.get('/', controller.getAllPhones);
