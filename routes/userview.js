import express from "express"
// import { User } from "../models/user.js"
import { getAllUsers, getmyprofile, login, register, logout, updateprofile } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"


const router = express.Router()

router.get(('/trial'), (req, res)=>{
    res.render('TRIAL.ejs',{name:'rahul'})
})
// router.post(('/new'), register)
// router.post(('/login'), login)
// router.get(('/logout'), logout)
// router.post(('/editprofile'), isAuthenticated, updateprofile)
// router.get(('/me'), isAuthenticated, getmyprofile)

// "/static-URL/:dynamic-URL"
// router.get("/userid/:id", getSpecificUsers)






export default router
