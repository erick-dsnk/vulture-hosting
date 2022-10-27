import { Request, Response } from "express";
import Server from "../../database/models/serverModel";
import { stopServer } from "../../mc";

const serversStopController = async (req: Request, res: Response) => {
  const server = await Server.findById(req.params.id);
  server.status = "stopped";

  const message = stopServer(server.name);

  server.save((error) => {
    if (error) res.status(501).send({ error });
    else res.status(200).send({ message });
  });
};

export default serversStopController;