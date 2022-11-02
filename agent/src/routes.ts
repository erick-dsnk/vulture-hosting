import express from "express";

import startServerController from "./controllers/startServerController";
import stopServerController from "./controllers/stopServerController";

const router = express.Router();

router.post("/servers/start/:id", startServerController);
router.post("/servers/stop/:id", stopServerController);

export default router;
