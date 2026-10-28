import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";
import { success } from "zod";

export const authorize = (...roles: string[]) => (
    req:AuthRequest,
    res:Response,
    next:NextFunction
): void => {
    if(!req.user){
        res.status(401).json({
            success: false,
            message: "Unauthorized",
        })
        return;
    }

    if(!roles.includes(req.user.role)){
        res.status(403).json({
            success:false,
            message: "Access Forbidden",
        })
        return;
    }

    next()
}