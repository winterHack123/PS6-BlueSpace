import { User } from "../models/user.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js"






// {
//     "name": "Krishna Kesarwani",
//     "email": "kk321@gmail.com",
//     "password": "kk",
//     "yearOFstudy": "3",
//     "foi": {
//         "1":"mech",
//         "2":"design",
//         "3": "coding"
//     }
// }




export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email }).select("+password")

        if (!user) {
            return next(new ErrorHandler("Invalid Email or Password...", 404))
        }

        const isMatch = bcrypt.compare(password, user.password)

        if (!isMatch) {
            return next(new ErrorHandler("Invalid Email or Password...", 404))
        }

        sendCookie(user, res, `Welcome back, ${user.name}.`, 200)
    } catch (error) {
        next(error)
    }
}



export const register = async (req, res) => {
    try {
        const { name, email, password, yearOFstudy, foi } = req.body
        let user = await User.findOne({ email })

        if (user) {
            return next(new ErrorHandler("User already exists...", 404))
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        user = await User.create({ name, email, password: hashedPassword, yearOFstudy, foi })

        sendCookie(user, res, "Registered Successfully...", 201)
    } catch (error) {
        next(error)
    }
}




export const getmyprofile = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    })
}




export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})

        res.json({
            success: true,
            users,
        })
    } catch (error) {
        next(error)
    }
}



export const logout = (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
    })
        .json({
            success: true,
            user: req.user,
        })
}



export const updateprofile = async (req, res, next) => {
    try {
        const { name, email, yearOFstudy, foi } = req.body
        let user = await User.findOne({ email })
        console.log(user)

        await User.updateMany({
            $set: {
                name: name,
                yearOFstudy: yearOFstudy,
                foi: foi,
            }
        })

        res.json({
            success: true,
            message: 'Profile updated successfully!'
        });
    } catch (error) {
        next(error)
    }

}




