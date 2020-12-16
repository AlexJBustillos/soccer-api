mongoose = require('mongoose')

const trophySchema = new mongoose.Schema({
    name: String,
    type: String
})

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    clubTeam: {
        type: String
    },
    nationalTeam: {
        type: String
    },
    trophies: [trophySchema],
    position: String
})

module.exports = mongoose.model('players', playerSchema)