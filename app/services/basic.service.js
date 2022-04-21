exports.bmi = payload => {
  const { name, height, weight } = payload

  let _height = Number(height)
  let _weight = Number(weight)
  let h = _height / 100 // cm 단위는 m 로 변경

  let bmi = _weight / Math.pow(h, 2)

  let output = Math.round(bmi * 100) / 100
  var result = { name, height, weight }
  console.log(`계산중----- : ${JSON.stringify(result)}`)

  if (output < 18.5) result.bmi = '저체중'
  if (output >= 18.5 && output <= 25) result.bmi = '정상'
  if (output >= 25 && output <= 30) result.bmi = '과체중'
  if (output > 30) result.bmi = '경도비만'

  console.log(`결과값 : ${JSON.stringify(result)}`)
  return result
}
