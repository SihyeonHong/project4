import { NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function authorizeNote(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.user!;
  // note가 존재하는지, 소유자가 인증된 사용자와 일치하는지 비교
  // 노트 없으면 404, 소유자가 아니면 403
  req.note = note;
  next();
}
