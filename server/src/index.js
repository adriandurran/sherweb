import express from 'express';
import morgan from 'morgan';

import socialRoutes from './routes/socialRoutes';
import twitterRoutes from './routes/twitterRoutes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/social', socialRoutes);
app.use('/api/twitter', twitterRoutes);

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Sherweb server started.... on port ${PORT}`);
});

export default app;
