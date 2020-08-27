import express from 'express'
const app = express()

const apiPort: number = 5000

app.get('/api/', (req, res) => {
  res.send('Root Test Message...')
})

app.get('/api/test', (req, res) => {
  res.send('/test Test Message...')
})

app.listen(5000, () => {
  console.log('API server running on port 5000')
})
