const express = require('express')
const { UserModel } = require('../db/schema')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    }   catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser =new UserModel(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    }   catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    const user = await User.findById(req.params.userId)
    user.id(req.params.id).remove()
    const saved = await users.save()
    res.json(saved)
  })

module.exports = router;