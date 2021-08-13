import nodemailer from 'nodemailer';
import chalk from 'chalk';

import { QueueTask } from './queue';
import { message } from '../email/message';
import { transporter } from '../email/transporter';

export async function worker({ email }: QueueTask): Promise<string> {
  const { log } = console;

  log(chalk.yellow(`Sending email to ${email}`));

  const newMessage = {
    ...message,
    to: email,
  };

  return new Promise<string>((resolve, reject) => {
    transporter.sendMail(newMessage, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info.messageId);
        log(chalk.blue(`Preview url: ${nodemailer.getTestMessageUrl(info)}`));
      }
    });
  });
}
