const { bmi } = require('../services/basic.service')

exports.getBmi = (req, res) => {
  const { name, height, weight } = req.body //json 값이 들어있다.
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`이름 : ${name}`)
  console.log(`키 : ${height}`)
  console.log(`몸무게 : ${weight}`)
  const json = bmi({ name, height, weight }) // service 에 payload
  console.log(`결과 값 : ${JSON.stringify(json)}`)
  res.status(200).json(json)
}
