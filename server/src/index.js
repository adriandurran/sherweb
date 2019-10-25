import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Sherweb server started.... on port ${PORT}`);
});

export default app;
