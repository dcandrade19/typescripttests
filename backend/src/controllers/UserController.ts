import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [{ name: 'Diego', email: 'dcandrade19@gmail.com' }, { name: 'Teste', email: 'teste@gmail.com' }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Diego Andrade',
        email: 'dcandrade19@gmail.com',
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem-vindo',
      },
    });
    res.send();
  },
};
