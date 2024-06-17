import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { scopePerRequest } from "awilix-express";
import container from "../providers/app-provider";

config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(scopePerRequest(container));

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

export default app;
