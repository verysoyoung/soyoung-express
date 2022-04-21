require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const { PORT } = process.env

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

const APP = './app/routes'
const nodes = ['basic']

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
for (const leaf of nodes) {
  require(`${APP}/${leaf}.route`)({ url: `/api/${leaf}`, app }) // 즉시 실행 app <- express
}

app.listen(PORT, () => {
  console.log('------ 서버 정상 가동 ------')
})

app.get('/', (req, res) => {
  res.json({ '현재 시간 : ': new Date().toLocaleString() })
})

app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({ now: new Date().toLocaleString() })
})
