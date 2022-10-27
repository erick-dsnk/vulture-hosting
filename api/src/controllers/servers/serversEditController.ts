import { Request, Response } from "express";
import Server from "../../database/models/serverModel";

const serversEditController = async (req: Request, res: Response) => {
  const server = await Server.findById(req.params.id);

  if ("owner" in req.body) {
    server.owner = req.body.owner;
  }

  server.save((error, newServer) => {
    if (error) res.status(501).send({ error });
    else res.status(200).send({ newServer });
  });
};

export default serversEditController;
