require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

// Create Users
const { ProjectModel, ProjectVariantModel, UserModel } = require('./schema')

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
// Create Projects and variants

const clothingVariant1 = new ProjectVariantModel({
    name: 'Belly Dancer Wrap',
    picture: '',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const clothingVariant2 = new ProjectVariantModel({
    name: 'Halter Top',
    picture: '',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const clothingVariant3 = new ProjectVariantModel({
    name: 'Armor',
    picture: '',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const clothing = new ProjectModel({
    type: 'Clothing',
    picture: '*****',
    description: 'This category includes clothes, "wraps", and, of course, armor.',
    materials: 'Rings of appropriate size, strength, and optionally color',
    tools: 'Large pliers of the appropriate size and grip strength, teeth are encouraged on the pliers because of the hardness of the rings and if small marks will not affect the overall feel of the piece. Wear padded work gloves. Otherwise your hands will get torn to pieces from the torque on your hands and the repeated motions over the many hours these projects take.',
    variants: [clothingVariant1, clothingVariant2, clothingVariant3]
})

const jewelryVariant1 = new ProjectVariantModel({
name: 'Byzantine Bracelet',
picture: '',
description: '',
additionalTools: '',
additionalMaterials: '',
schematics: '****',
})
const jewelryVariant2 = new ProjectVariantModel({
name: 'Bubble Ring Earrings',
picture: '',
description: '',
additionalTools: '',
additionalMaterials: '',
schematics: '****',
})
const jewelryVariant3 = new ProjectVariantModel({
name: 'Flower Hairpiece',
picture: '',
description: '',
additionalTools: '',
additionalMaterials: '',
schematics: '****',
})
const jewelry = new ProjectModel({
type: 'Jewelry',
picture: '*****',
description: 'Jewelry: make something pretty for someone.',
materials: 'Rings of appropriate size, strength, and optionally color',
tools: 'Smaller pliers of the appropriate size and grip strength, teeth are NOT encouraged on the pliers because it will mark the rings and even small marks will mar the piece. You may wish to not use gloves when working on smaller piece for the additional dexterity.',
variants: [jewelryVariant1, jewelryVariant2, jewelryVariant3,]
})



const ornamentalVariant1 = new ProjectVariantModel({
name: 'Dreamcatcher',
picture: '****',
description: '',
additionalTools: '',
additionalMaterials: '',
schematics: '****',
})
const ornamentalVariant2 = new ProjectVariantModel({
name: 'Wall Hanging',
picture: '',
description: '',
additionalTools: '',
additionalMaterials: '',
schematics: '****',
})
const ornamentalVariant3 = new ProjectVariantModel({
name: 'Flower',
picture: '',
description: '',
additionalTools: '',
additionalMaterials: '',
schematics: '****',
})
const ornanmental = new ProjectModel({
type: 'Ornamental',
picture: '*****',
description: 'These are projects like dream catchers, wall hangings, and flowers.',
materials: 'Rings of appropriate size, strength, and color',
tools: 'Pliers of the appropriate size and grip strength depending on the size and intricacy of the project (when in doubt use larger pliers and shift to smaller ones if the rings move too easily), teeth are also encouraged on the pliers because of the hardness of the rings and if small marks will not affect the overall feel of the piece.',
variants: [ornamentalVariant1, ornamentalVariant2, ornamentalVariant3]
})

ProjectModel.remove({})
    .then(() => clothing.save())
    .then(() => console.log("Saved Clothing"))
    .then(() => jewelry.save())
    .then(() => console.log("Saved Jewelry"))
    .then(() => ornanmental.save())
    .then(() => console.log("Saved Ornamental"))
    .then(() => UserModel.remove({})
        .then(() => user1.save())
        .then(() => user2.save())
        .then(() => user3.save())
        .then(() => console.log("Saved Users"))
        .then(() => mongoose.connection.close()))