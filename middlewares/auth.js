import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";


export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token
    console.log(token)

    if (!token) {
        return res.status(404).json({
            success: false,
            message: "LogIn first..."
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id);

    next()
}