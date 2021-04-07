const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys')

class Mailer extends helper.Mail {

    
    // this.from_email = new helper.Email('ton.truong.dao@outlook.com');


}

module.exports = Mailer;