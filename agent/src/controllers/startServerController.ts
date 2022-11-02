import { Request, Response } from "express";
import startServer from "../commands/startServerCommand";

const startServerController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await startServer(id);

  res.json({ message: "started server" });
};

export default startServerController;
