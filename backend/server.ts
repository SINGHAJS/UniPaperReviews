import express, { NextFunction, Request, Response } from "express";
import { AppRouter } from "./routes/api/repository";
import { establishDatabaseConnection } from "./config/db";

// express app
const app = express();
const port = 8882;

// Middleware for JSON parsing
app.use(express.json());

// Middleware for logging
app.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
  next();
});

// Default route for '/'
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Welcome to Paper Reviews API Service!");
});

app.use("/api/paper-reviews", AppRouter);

// Connect to MongoDB
establishDatabaseConnection();

// Start the server
app.listen(port, () => console.log(`Listening on Port: ${port}`));
