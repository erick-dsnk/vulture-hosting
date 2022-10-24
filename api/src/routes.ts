import express from "express";

import testController from "./controllers/testController";

import serversListController from "./controllers/servers/serversListController";
import serversCreateController from "./controllers/servers/serversCreateController";
import serversEditController from "./controllers/servers/serversEditController";
import serversByIdController from "./controllers/servers/serversByIdController";
import serversDeleteController from "./controllers/servers/serversDeleteController";

import signUpController from "./controllers/auth/signUpController";
import signInController from "./controllers/auth/signInController";

import verifyToken from "./middlewares/authJWT";

const router = express.Router();

/*

Routes: 
  - /servers/:userId       Get all servers
  - /servers/:id           Get server by ID
  - /servers/create        Create server
  - /servers/edit/:id      Delete server by ID
  - /servers/delete/:id    Edit server by ID

  - /register              Create a new user profile
  - /login                 Log in to an existing profile
*/

// router.get("/test", testController);

router.get("/servers/:userId", verifyToken, serversListController);
router.get("/servers/:id", verifyToken, serversByIdController);
router.post("/servers/create/:id", verifyToken, serversCreateController);
router.patch("/servers/edit/:id", verifyToken, serversEditController);
router.delete("/server/delete/:id", verifyToken, serversDeleteController);

router.post("/register", signUpController);
router.post("/login", signInController);

export default router;