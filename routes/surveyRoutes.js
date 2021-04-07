const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

        // Taking information from the "request object"
        const { title, subject, body, recipients} = req.body;

        // Trim any empty space from spliting method.
        const survey = new Survey ({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now(),

        })
    })
}