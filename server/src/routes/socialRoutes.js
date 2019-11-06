import express from 'express';
const router = express.Router();

import { getSocialAccounts } from '../controllers/socialController';

router.get('/:name', getSocialAccounts);

export default router;
