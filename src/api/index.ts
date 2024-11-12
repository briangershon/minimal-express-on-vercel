import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/api/hello', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from TypeScript Express on Vercel!' });
});

// Required for Vercel serverless deployment
export default app;
