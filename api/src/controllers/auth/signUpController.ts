import { Request, Response } from "express";
import { hashSync } from "bcrypt";

import User from "../../database/models/userModel";

const signUpController = async (req: Request, res: Response) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashSync(req.body.password, 8),
  });

  user.save((error, user) => {
    if (error) res.status(500).send({ error });
    else res.status(200).send({ message: "Created User." });
  });
};

export default signUpController;
