import { Request, Response } from "express";
import stopServer from "../commands/stopServerCommand";

const stopServerController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await stopServer(id);

  res.json({ message: "stopped server" });
};

export default stopServerController;
