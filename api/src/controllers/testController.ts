import { Request, Response } from "express";

const testController = async (req: Request, res: Response) => {
  res.send("test ok.");
};

export default testController;
