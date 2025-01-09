import express, { Request, Response, NextFunction, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./router";

// Load environment variables from .env file
dotenv.config();

// Initialize the express application
const app: Application = express();

// Middleware setup
app.use(helmet());
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan("dev")); // Logging HTTP requests

app.set("trust proxy", true);
// Example route

app.use("/", router);

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
