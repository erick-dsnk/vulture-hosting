import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import User from "../database/models/userModel";

interface RequestWithUser extends Request {
  user?: any;
}

const verifyToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] == "JWT"
  ) {
    verify(
      req.headers.authorization.split(" ")[1],
      process.env.API_SECRET,
      (err, payload: any) => {
        if (err) req.user = undefined;

        User.findOne({
          _id: payload.id,
        }).exec((error: any, user: any) => {
          if (error) {
            res.status(500).send({ error });
          } else {
            req.user = user;
            next();
          }
        });
      }
    );
  } else {
    req.body.user = undefined;
    next();
  }
};

export default verifyToken;
