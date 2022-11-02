import { Request, Response } from "express";
import Server from "../../database/models/serverModel";

const serversCreateController = async (req: Request, res: Response) => {
  const server = new Server({
    name: req.params.name,
    status: "stopped",
    owner: req.params.owner,
  });

  server.save((error) => {
    if (error) res.status(500).send({ error });
    else {
      res.status(200).send({ message: "created" });
    }
  });
};

export default serversCreateController;
