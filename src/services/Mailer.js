// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// var API_KEY = 'YOUR_API_KEY';
// var DOMAIN = 'YOUR_DOMAIN_NAME';
var mailgun = require('mailgun-js')({ apiKey: process.env.API_KEY, domain: process.env.DOMAN });

const sendMail = (contact) => {
	const msg = {
		from: `${contact.email}`,
		to: 'tueloper@gmail.com',
		subject: `${contact.subject}`,
		html: `
			 <html>
      <p>From ${contact.name}</p>
        <div style="font-size: 20px; margin-top: 30px; font-family: 'cursive">
          <p>${contact.content}</p>
        </div>
    </html>
		`
	};
	mailgun.messages().send(msg, (error, body) => {
		console.log(body);
	});
};

export default sendMail;
