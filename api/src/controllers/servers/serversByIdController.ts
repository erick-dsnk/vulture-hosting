import { Request, Response } from "express";

import Server from "../../database/models/serverModel";

const serversByIdController = async (req: Request, res: Response) => {
  Server.findOne({ _id: req.params.id }).exec((error, server) => {
    if (error) res.status(404).send({ error });
    else res.status(200).send({ server });
  });
};

export default serversByIdController;
