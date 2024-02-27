import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToDatabase from './configs/db.config'

const app = express()
const port = process.env.APP_PORT || 8080

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

/* ------------------- Middlewares -------------------- */
dotenv.config()
app.use(cors(corsOptions))
app.use(express.json())

connectToDatabase()


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})