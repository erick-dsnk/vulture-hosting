import { Request, Response } from "express";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

import User from "../../database/models/userModel";

const signInController = async (req: Request, res: Response) => {
  User.findOne({
    email: req.body.email,
  }).exec((error, user) => {
    if (error) {
      return res.status(500).send({ error });
    }

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    if (!compareSync(req.body.password, user.password)) {
      return res.status(401).send({
        token: null,
        message: "Invalid Password!",
      });
    }

    const token = sign({ id: user.id }, process.env.API_SECRET, {
      expiresIn: 86400,
    });

    res.status(200).send({
      user,
      token,
      message: "Login Successful",
    });
  });
};

export default signInController;
