import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { scopePerRequest } from "awilix-express";
import container from "../providers/app-provider";
import Logger from "../../shared/utils/logger";
import sequelize from "../database/db-connection";

config();

const app: Express = express();

const logger: Logger = container.resolve("logger");

sequelize
  .authenticate()
  .then(() => {
    logger.info(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error: Error) => {
    logger.error(`Unable to connect to the database: ${error}`);
  });

app.use((req: Request, res: Response, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(scopePerRequest(container));

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

export default app;
