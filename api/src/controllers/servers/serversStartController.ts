import { Request, Response } from "express";
import Server from "../../database/models/serverModel";

const serversStartController = async (req: Request, res: Response) => {
  const server = await Server.findById(req.params.id);

  server.save((error) => {
    if (error) res.status(501).send({ error });
    else res.status(200).send({ message: "started" });
  });
};

export default serversStartController;
