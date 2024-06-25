import { Router } from "express";
import handleRequest from "../../infrastructure/http/handle-request";

const router = Router();

router.post("/add-user", handleRequest("userHttpController"));

export default router;
