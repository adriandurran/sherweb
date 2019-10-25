import express from 'express';
import morgan from 'morgan';

import socialRoutes from './routes/getSocial';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/social', socialRoutes);

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Sherweb server started.... on port ${PORT}`);
});

export default app;
