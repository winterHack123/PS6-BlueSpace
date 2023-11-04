import express from "express";
import { newTask, getmyTask, updatemyTask, deletemyTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";



const router = express.Router()

router.post('/new', isAuthenticated, newTask)

router.post('/mytask', isAuthenticated, getmyTask)

router.route('/:id').put(isAuthenticated, updatemyTask).delete(isAuthenticated, deletemyTask)


export default router