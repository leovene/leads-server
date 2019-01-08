'use strict';

import express from 'express';
import { listAll,find,create,remove, update } from '../controllers/employees';

const router = express.Router();

router.get('/list', listAll);
router.get('/find/:id', find);
router.post('/create', create);
router.post('/remove/:id', remove);
router.post('/update', update);

export default router;