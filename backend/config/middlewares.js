
const bodyParser = require('body-parser')
const cors = require('cors')


module.exports = app => {
    app.use(bodyParser.json({
        limit: '50mb'
      }));
      
      app.use(bodyParser.urlencoded({
        limit: '50mb',
        parameterLimit: 100000,
        extended: true 
      }));
    app.use(bodyParser.json())
    app.use(cors())

}