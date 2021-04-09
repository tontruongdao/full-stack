const { URL } = require('url')
const mongoose = require('mongoose');
const _ = require('lodash');
const { Path } = require('path-parser')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ recipients: false }) // Selecting only list of surveys without recipient field. 

        res.send(surveys)
    })

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!')
    })

    // look instruction in "lesson186.md" to use webhook.
    app.post('/api/surveys/webhooks', (req, res) => {

        const p = new Path('/api/surveys/:surveyId/:choice') // To extract data from URL
        
        const events = _.chain(req.body) //Chain helper using "lodash" library
            .map(({ email, url }) => {
            
                const match = p.test(new URL(url).pathname);

                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            
            .compact() // removes undefined element
            .uniqBy('email', 'surveyId') // removes duplicates in different surveys
            .each(eavent => {
                Survey.updateOne({
                    id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false}
                    }
                })
            })
            .value();

        console.log(events);

        res.send({})
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

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

        // Send an email.
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
            await mailer.send();
    
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
    
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    })
}