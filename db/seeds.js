require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const {UserModel} = require('./schema')

// Create Users
const user1 = new UserModel({
    name: 'Eric',
    password: 'Verizon',
    picture: '****',
})
const user2 = new UserModel({
    name: 'Nathan',
    password: 'Placeholder',
    picture: '****',
})
const user3 = new UserModel({
    name: 'Hephaestus',
    password: 'AresIsAJerk',
    picture: '****',
})

UserModel.remove({})
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => console.log("Saved Users"))
    .then(() => mongoose.connection.close())