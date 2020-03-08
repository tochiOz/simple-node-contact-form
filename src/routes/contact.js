import express from 'express';
import ContactController from './../controllers/ContactController';

const contactRouter = express.Router();

contactRouter.post(`/contact`, ContactController.Contact);

export default contactRouter;
