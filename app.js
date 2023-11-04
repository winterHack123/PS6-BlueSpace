import express from "express"
import userRouter from "./routes/user.js"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import taskRouter from './routes/task.js'
import { errorMiddlewares } from "./middlewares/error.js"
import cors from "cors"

export const app = express()


config({
    path: "./data/config.env"
})


// Using Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(errorMiddlewares)
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// Using routes
app.use("/ipp/users", userRouter)
app.use("/ipp/tasks", taskRouter)


app.get(('/'), (req, res) => {
    res.send("Nice Working Brother...")
})

