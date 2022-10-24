import { Request, Response } from "express";

import Server from "../../database/models/serverModel";

const serversListController = async (req: Request, res: Response) => {
  Server.find({ owner: req.params.userId }).exec((error, servers) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(200).send({ servers });
    }
  });
};

export default serversListController;
