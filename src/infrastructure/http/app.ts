import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

export default app;
