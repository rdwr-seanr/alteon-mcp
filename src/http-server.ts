import express, { Request, Response, NextFunction } from 'express';

// Create the Express application
const app = express();
const PORT = process.env.PORT || 8787;

// Health check endpoint to confirm server is running
app.get('/health', (_req: Request, res: Response) => {
  res.json({ ok: true });
});

// Generic error handler to provide insight if something goes wrong
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Start the server when this file is executed directly
if (require.main === module) {
  app
    .listen(PORT, () => {
      console.log(`HTTP server listening on http://localhost:${PORT}`);
    })
    .on('error', (err) => {
      console.error('Failed to start server:', err);
    });
}

export default app;
