const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient')
const { Schema } = mongoose;

const surveySchema = newSchema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 }
})

mongoose.model('survey', surveySchema);