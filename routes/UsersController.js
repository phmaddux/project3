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
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new UserModel(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    await UserModel.findByIdAndUpdate(req.params.id)
    const users = await UserModel.find({})
    user.name = updatedUser.name
    user.password = updatedUser.password
    user.picture = updatedUser.picture
    user.description = updatedUser.description
    // Save the user object
    const saved = await UserModel.save()
    // Send the updated user.
    res.json(users)
    console.log(users)
})

router.delete('/:id', async (req, res) => {
    try {
        await UserModel.findByIdAndRemove(req.params.id)   
        const users = await UserModel.find({})
        res.json(users)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router;