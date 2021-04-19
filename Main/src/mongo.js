const mongoose = require('mongoose')
const config = require('../config.json')

module.exports = async () => {
await mongoose.connect(config.MongoToken, {
     useUnifiedTopology: true,
     useNewUrlParser: true
    })
    
return mongoose
}
