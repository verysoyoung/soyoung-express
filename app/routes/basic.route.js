const { getBmi } = require('../controllers/basic.controller.js')
module.exports = x => x.app.post(`${x.url}/bmi`, getBmi)

// <- controller 안에 있는 파일이 module
