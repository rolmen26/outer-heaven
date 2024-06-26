import { Router } from "express";
import handleRequest from "../../infrastructure/http/handle-request";

const router = Router();

router.post("/create", handleRequest("createUserHttpController"));

export default router;
