import express from "express"
// import { User } from "../models/user.js"
import { getAllUsers, getmyprofile, login, register, logout, updatefoi, updateprofile } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"


const router = express.Router()

router.get(('/all'), getAllUsers)

router.post(('/new'), register)
router.post(('/login'), login)
router.get(('/logout'), logout)
router.post(('/editfoi'), isAuthenticated, updatefoi)
router.post(('/editprofile'), isAuthenticated, updateprofile)

// "/static-URL/:dynamic-URL"
// router.get("/userid/:id", getSpecificUsers)


router.get(('/me'), isAuthenticated, getmyprofile)




export default router
