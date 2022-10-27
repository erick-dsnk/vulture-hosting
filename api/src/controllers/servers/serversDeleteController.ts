import { Request, Response } from "express";
import Server from "../../database/models/serverModel";
import { deleteServer } from "../../mc";

const serversDeleteController = async (req: Request, res: Response) => {
  const server = await Server.findOne({ _id: req.params.id });
  const serverName = server.name;

  Server.deleteOne({ _id: req.params.id }, (error) => {
    if (error) res.status(501).send({ error });
    else {
      const message = deleteServer(serverName);
      res.status(200).send({ message });
    }
  });
};

export default serversDeleteController;
