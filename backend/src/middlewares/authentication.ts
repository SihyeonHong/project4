import { NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    return res.sendStatus(401);
  }
  // jwt가 유효한지 확인 후 디코드하여 사용자 정보(이메일 주소) 획득
  // 유효하지 않으면 401
  req.user = user;
  next();
}
