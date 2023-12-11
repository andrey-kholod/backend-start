import express from "express"
import { authUser } from './auth.controller.js'
import authRoutes from './auth.routes.js'
import dotenv from "dotenv"
import morgan from 'morgan'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

console.log(PORT)
async function main() {
   if (process.env.NODE_ENV === 'development') {
      console.log('sdfdfsd')
      app.use(morgan('dev'))
   }

   app.use(express.json()) //грузим файлы в json и отправляем тоже
   app.use('/api/auth', authRoutes)
   app.listen(PORT, () => console.log('Hi!!'))
}

main()