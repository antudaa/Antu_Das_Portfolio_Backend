import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundRoute from "./app/middlewares/notFoundRoute";
import router from "./app/routes";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());

app.use(`/api`, router);

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello Antu_Daa 🌴😎`);
});

// Global Error Handler.
app.use(globalErrorHandler);

// Not Found Router.
app.use(notFoundRoute);

export default app;
