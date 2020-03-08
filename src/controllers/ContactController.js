import model from '../models';
import { magicTrimmer } from '../utils/validator';
import { sendSuccessResponse } from '../utils/sendResponse';
import sendMail from '../services/emailsender';
import contactTemplate from './../services/emailTemplates/contactTemplate';

const { Contact } = model;

const ContactController = {
	async Contact (req, res, next) {
		try {
			// trime the body
			const contactData = magicTrimmer(req.body);

			const { name, email, subject, content } = contactData;
			const contact = await Contact.create({
				name,
				email,
				subject,
				content
			});

			// return console.log(contact);
			await sendMail(contact.dataValues);
			return sendSuccessResponse(res, 200, contact);
		} catch (e) {
			console.log(e);
			return next(e);
		}
	}
};

export default ContactController;
