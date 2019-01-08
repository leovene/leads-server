'use strict';

import express from 'express';
import { authenticate } from '../controllers/user';

const router = express.Router();

router.post('/authenticate', authenticate);

export default router;