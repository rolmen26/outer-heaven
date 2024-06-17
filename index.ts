import { config } from "dotenv";
import app from "./src/infrastructure/http/app";
import http from "http";
import sequelize from "./src/infrastructure/database/db-connection";

config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

const startServer = async () => {
  await authenticateDatabase();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
