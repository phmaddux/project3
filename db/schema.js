const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    picture: {
        type: String
    }
})

const ProjectVariantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    description: {
        type: String,
    },
    additionalTools: {
        type: String,
    },
    additionalMaterials: {
        type: String,
    },
    schematics: {
        type: String
    }
})


const ProjectSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    picture: {
        type: String,
    },
    materials: {
        type: String,
    },
    tools: {
        type: String,
    },
    projectVariants: [ProjectVariantSchema]

});

// Creating models for each schema
const UserModel = mongoose.model('User', UserSchema)
const ProjectVariantModel = mongoose.model('ProjectVariants', ProjectVariantSchema)
const ProjectSchemaModel = mongoose.model('ProjectSchema', ProjectSchema)

// Exporting each model
module.exports = {
    UserModel: UserModel,
    ProjectVariantModel: ProjectVariantModel,
    ProjectSchemaModel: ProjectSchemaModel
}