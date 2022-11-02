import { Request, Response } from "express";
import Server from "../../database/models/serverModel";

const serversDeleteController = async (req: Request, res: Response) => {
  Server.deleteOne({ _id: req.params.id }, (error) => {
    if (error) res.status(501).send({ error });
    else {
      res.status(200).send({ message: "deleted" });
    }
  });
};

export default serversDeleteController;
