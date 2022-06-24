import 'reflect-metadata'
import 'dotenv/config'
import { app } from './app'
import { dataSource } from '../typeorm'

dataSource.initialize().then(() => {
  const server = app.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running! Port = ${process.env.PORT || 3333}`)
  })
})