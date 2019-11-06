import express from 'express';
import { twitterSearch } from '../controllers/twitterController';

const router = express.Router();

router.post('/search', twitterSearch);

export default router;
