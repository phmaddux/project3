const express = require('express')
const { ProjectModel } = require('../db/schema')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projects = await ProjectModel.find({})
        res.json(projects)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id)
        res.json(project)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;