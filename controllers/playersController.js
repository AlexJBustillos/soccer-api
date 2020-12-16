const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Player.find().then((foundPlayers) => {
        res.status(200).json({ players: foundPlayers })
    })
    .catch(err => { res.send(err) })
})
router.get('/:id', (req, res) => {
    models.Player.findOne({_id: req.params.id}).then((player) => {
        res.status(200).json({ player })
    })
    .catch(err => { res.send(err) })
})
router.post('/', (req, res) => {
    models.Player.create(req.body).then((player) => {
        res.status(201).json({ player })
    })
    .catch(err => { res.send(err) })
})
router.put('/:id', (req, res) => {
    models.Player.updateOne(
        { _id: req.params.id },
        {$set: {name: `${anything}` }}
    ).then((update) => {
        res.status(200).json({ update })
    })
    .catch(err => { res.send(err) })
})
router.delete('/:id', (req, res) => {
    models.Player.deleteOne({_id: req.params.id }).then((deleted) => {
        console.log(deleted);
    })
    .catch(err => { res.send(err) })
})

module.exports = router