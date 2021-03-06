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
        type: String,
    },
    aboutMe: {
        type: String,
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
    variants: [ProjectVariantSchema]
});

// Creating models for each schema
const UserModel = mongoose.model('Users', UserSchema)
const ProjectVariantModel = mongoose.model('ProjectVariants', ProjectVariantSchema)
const ProjectModel = mongoose.model('Projects', ProjectSchema)

// Exporting each model
module.exports = {
    UserModel: UserModel,
    ProjectVariantModel: ProjectVariantModel,
    ProjectModel: ProjectModel
}