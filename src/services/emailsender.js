import { transporter } from '../config/nodemailer-config';

const SendMail = (contact) => {
	const msg = {
		from: `${contact.email}`,
		to: 'tueloper@gmail.com',
		subject: `${contact.subject}`,
		html: `
			 <html>
      <h3>From ${contact.name}</h3>
        <div style="font-size: 20px; margin-top: 30px; font-family: 'cursive">
          <p>${contact.content}</p>
        </div>
    </html>
		`
	};

	transporter.sendMail(msg, (error, info) => {
		if (error) {
			return 'error sending verification';
		}
		console.log(`Email sent: ${info.response}`);
	});
};

export default SendMail;
