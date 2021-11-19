const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,

    // Channels

    LogsChannel: String, 
    WelcomeChannel: String,

    // Roles

    MutedRole: String,
    ModRole: String,
    AdminRole: String,

    // Values

    LogsEnabled: Boolean,
    WelcomeEnabled: Boolean,
})

module.exports = mongoose.model('configSetting', Schema)