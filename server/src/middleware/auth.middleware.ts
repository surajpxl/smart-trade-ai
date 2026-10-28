import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string;
    role: string;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
  file?: Express.Multer.File;
}

export const protect = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "Access denied. No token provided.",
            })
            return;
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as JwtPayload

        req.user = decoded;

        next()

    } catch (error) {
        res.status(401).json({
            success:false,
            message: "Invalid or expired token"
        })
    }
}