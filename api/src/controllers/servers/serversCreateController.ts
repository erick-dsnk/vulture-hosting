import { Request, Response } from "express";
import Server from "../../database/models/serverModel";
import { createServer } from "../../mc";

const serversCreateController = async (req: Request, res: Response) => {
  const server = new Server({
    name: req.params.name,
    status: "stopped",
    owner: req.params.owner,
  });

  server.save((error) => {
    if (error) res.status(500).send({ error });
    else {
      const message = createServer(server.name);
      res.status(200).send({ message });
    }
  });
};

export default serversCreateController;
