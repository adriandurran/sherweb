import express from 'express';
import Keycloak from 'keycloak-connect';
import session from 'express-session';
import morgan from 'morgan';

import socialRoutes from './routes/socialRoutes';
import twitterRoutes from './routes/twitterRoutes';

const memoryStore = new session.MemoryStore();

const app = express();
app.use(
  session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);
const keycloak = new Keycloak({ store: memoryStore });
app.use(keycloak.middleware());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/social', socialRoutes);
app.use('/api/twitter', twitterRoutes);

app.get('/test', keycloak.protect(), (req, res) => res.send('hello'));

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Sherweb server started.... on port ${PORT}`);
});

export default app;
