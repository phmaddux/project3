require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

// Create Users
const { ProjectModel, ProjectVariantModel, UserModel } = require('./schema')

const user1 = new UserModel({
    name: 'Eric',
    password: 'Verizon',
    picture: 'https://i.imgur.com/rhYrQyZ.png',
    aboutMe: 'I love metalworking and the saxaphone.'
})
const user2 = new UserModel({
    name: 'Hunter',
    password: 'Placeholder',
    picture: 'https://i.imgur.com/9YLh9UD.jpg',
    aboutMe: 'I got too fat for my armor, so my knightly title is now, "sir cumference".'
})
const user3 = new UserModel({
    name: 'Hephaestus',
    password: 'AresIsAJerk',
    picture: 'https://i.imgur.com/d3SDCKY.png',
    aboutMe: 'My brother Ares is a jerk!'
})
// Create Projects and variants

const clothingVariant1 = new ProjectVariantModel({
    name: 'Belly Dancer Wrap',
    picture: 'https://i.imgur.com/QdKlKHQ.png?1',
    description: 'A basic jangly, shiny, waist wrap. You can add more items like coins, bells, or lengths of chain for extra sound/flash if you like.',
    additionalTools: 'None.',
    additionalMaterials: 'Clasps / tying device, scales, bells',
    schematics: '****',
})
const clothingVariant2 = new ProjectVariantModel({
    name: 'Tie',
    picture: 'https://i.imgur.com/MEA5Ada.jpg',
    description: 'A metal tie of the standard length for the gentleman who wants to stand out.',
    additionalTools: 'None',
    additionalMaterials: 'Clasp',
    schematics: '****',
})
const clothingVariant3 = new ProjectVariantModel({
    name: 'Armor',
    picture: 'https://i.imgur.com/MluEtA9.jpg',
    description: 'The lastest in personal protection from 300 years ago.',
    additionalTools: 'Large pliers, you will need the extra torque',
    additionalMaterials: 'Leather ties to keep the seams closed when it is being worn.',
    schematics: '****',
})
const clothing = new ProjectModel({
    type: 'Clothing',
    picture: 'https://i.imgur.com/n55FVMB.jpg',
    description: 'This category includes clothes, "wraps", and, of course, armor.',
    materials: 'Rings of appropriate size, strength, and optionally color',
    tools: 'Large pliers of the appropriate size and grip strength, teeth are encouraged on the pliers because of the hardness of the rings and if small marks will not affect the overall feel of the piece. Wear padded work gloves. Otherwise your hands will get torn to pieces from the torque on your hands and the repeated motions over the many hours these projects take.',
    variants: [clothingVariant1, clothingVariant2, clothingVariant3]
})

const jewelryVariant1 = new ProjectVariantModel({
    name: 'Byzantine Bracelet',
    picture: 'https://i.imgur.com/OpDrlcX.jpg',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const jewelryVariant2 = new ProjectVariantModel({
    name: 'Bubble Ring Earrings',
    picture: 'https://i.imgur.com/xNikf4e.jpg',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const jewelryVariant3 = new ProjectVariantModel({
    name: 'Flower Hairpiece',
    picture: 'https://i.imgur.com/NFV6gfd.jpg',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const jewelry = new ProjectModel({
    type: 'Jewelry',
    picture: 'https://i.imgur.com/HfMvDNl.jpg',
    description: 'Jewelry: make something pretty for someone.',
    materials: 'Rings of appropriate size, strength, and optionally color',
    tools: 'Smaller pliers of the appropriate size and grip strength, teeth are NOT encouraged on the pliers because it will mark the rings and even small marks will mar the piece. You may wish to not use gloves when working on smaller piece for the additional dexterity.',
    variants: [jewelryVariant1, jewelryVariant2, jewelryVariant3,]
})

const ornamentalVariant1 = new ProjectVariantModel({
    name: 'Dreamcatcher',
    picture: 'https://i.imgur.com/yP6Afdw.jpg?1',
    description: 'A metal dreamcatcher. For those heavy duty nightmares.',
    additionalTools: 'Clips, to hold any wrapping in place while it is tied',
    additionalMaterials: 'Leather, rope, stones, scales, feathers, bells, etc.',
    schematics: '****',
})
const ornamentalVariant2 = new ProjectVariantModel({
    name: 'Wall Hanging',
    picture: 'https://i.imgur.com/dnqXTA6.jpg',
    description: 'A decorative wall hanging.',
    additionalTools: 'None.',
    additionalMaterials: `A rod to mount the top of the hanging on so it doesn't sag.`,
    schematics: '****',
})
const ornamentalVariant3 = new ProjectVariantModel({
    name: 'Flower',
    picture: 'https://i.imgur.com/Oe1Fo6n.jpg',
    description: '',
    additionalTools: '',
    additionalMaterials: '',
    schematics: '****',
})
const ornanmental = new ProjectModel({
    type: 'Ornamental',
    picture: 'https://i.imgur.com/KAMhtxu.jpg?1',
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