import { config } from "dotenv";
import app from "./src/infrastructure/http/app";
import http from "http";

config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
