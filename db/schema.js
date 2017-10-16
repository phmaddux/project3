const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: ture
    },
    password: {
        type: String,
    }
})

const ProjectVariantsSchema = new Schema({
    picture: { 
        type: tring,
    },
    variantName: {
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
        type: string
    }
})


const ProjectSchema = new Schema({
    type: {
        type: String,
        required: true,
        
    },
    country: {
        type: String,
        required: true
    },
    projectVariants: [ProjectVariantsSchema]
});

// Creating models for each schema
const UserModel = mongoose.model('User',UserSchema)
const ProjectVariantsModel = mongoose.model('ProjectVariants', ProjectVariantsSchema)
const ProjectsSchemaModel = mongoose.model('ProjectsSchema', ProjectsSchemaSchema)

// Exporting each model
module.exports = {
    UserModel: UserModel,
    ProjectVariantsModel: ProjectVariantsModel,
    ProjectsSchemaModel: ProjectsSchemaModel
}