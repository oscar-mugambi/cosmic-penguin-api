import type { Express, Request, Response } from 'express'
import express from 'express'
import { env } from './env'

const app: Express = express()
const port = 6000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Cosmic Penguin API!')
})

app.get('/api/info', (req: Request, res: Response) => {
  res.json({
    app: 'Cosmic Penguin API',
    version: '1.0.0',
    environment: env.NODE_ENV || 'development',
  })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`)
})
