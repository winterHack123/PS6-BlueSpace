import ErrorHandler from "../middlewares/error.js"
import { Task } from "../models/task.js"




export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body
        await Task.create({
            title, description, user: req.user,
        })

        res.status(201).json({
            success: true,
            message: "Task added successfully..."
        })
    } catch (error) {
        next(error)
    }
}

export const getmyTask = async (req, res, next) => {
    try {
        const userid = req.user._id
        const tasks = await Task.find({ user: userid })

        res.status(200).json({
            success: true,
            tasks,
        })
    } catch (error) {
        next(error)
    }
}

export const updatemyTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.param.id)

        if (!task) {
            return next(new ErrorHandler("No task to update...", 404))
        }


        task.isCompleted = !task.isCompleted
        await task.save()

        res.status(200).json({
            success: true,
            message: "Task updated..."
        })
    } catch (error) {
        next(error)
    }
}

export const deletemyTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.param.id)

        if (!task) {
            return next(new ErrorHandler("No task to delete...", 404))
        }

        await task.deleteOne()

        res.status(200).json({
            success: true,
            message: "Task deleted..."
        })
    } catch (error) {
        next(error)
    }
}
