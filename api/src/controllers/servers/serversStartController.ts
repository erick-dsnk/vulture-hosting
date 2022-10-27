import { Request, Response } from "express";
import Server from "../../database/models/serverModel";
import { startServer } from "../../mc";

const serversStartController = async (req: Request, res: Response) => {
  const server = await Server.findById(req.params.id);
  server.status = "running";

  const message = startServer(server.name);

  server.save((error) => {
    if (error) res.status(501).send({ error });
    else res.status(200).send({ message });
  });
};

export default serversStartController;
