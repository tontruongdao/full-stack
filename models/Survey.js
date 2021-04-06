const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = newSchema({
    title: String,
    body: String,
    subject: String,
    recipients: [String],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 }
})

mongoose.model('survey', surveySchema);