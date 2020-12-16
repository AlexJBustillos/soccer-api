require('dotenv').config()

const models = require('./models')

models.Player.create({
    name: 'Sergio Ramos',
    clubTeam: 'Real Madrid',
    nationalTeam: 'Spain',
    trophies: [{
        name: 'Champions League',
        type: 'Real Madrid'
    },{
        name: 'World Cup',
        type: 'Spain'
    }],
    position: 'Defender: Center Back'
}).then(() => {
    console.log('Player made in the lab');
})