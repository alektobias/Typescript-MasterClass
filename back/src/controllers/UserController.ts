import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {name: "Alek Tobias", email: "alektobias@gmail.com"}
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail(
      {
        to: {
          name: 'Alek Tobias', 
          email: "alektobias@gmail.com"},
        message: {
          subject: 'Confirmar senha', 
          body: "Para finalizar o cadstro confirme seu email"
        }
      }
    );


    return res.send();
  }
}