import { Request, Response } from "express";

const serversEditController = async (req: Request, res: Response) => {
  res.send({ oldServer: {}, newServer: {} });
};

export default serversEditController;
