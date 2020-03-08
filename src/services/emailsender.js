import { transporter } from '../config/nodemailer-config';

const SendMail = ({ email, subject, content, name }) => {
	const msg = {
		from: `${email}`,
		to: 'tueloper@gmail.com',
		subject: `${subject}`,
		html: `
			 <html>
      <h3>From ${name} with email ${email}</h3>
        <div style="font-size: 20px; margin-top: 30px; font-family: 'cursive">
          <p>${content}</p>
        </div>
    </html>
		`
	};

	transporter.sendMail(msg, (error, info) => {
		if (error) {
			return 'error sending contact mail';
		}
		console.log(`Email sent: ${info.response}`);
	});
};

export default SendMail;
