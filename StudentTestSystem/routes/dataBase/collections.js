let mongoose = require('mongoose')
let collectionsSchema = new mongoose.Schema({
    studentId: { // 学员 _id
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'students'
    },
    exerciseId: { // 试题 _id
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'exercises'
    },
})

mongoose.model('collections',collectionsSchema,'collections')