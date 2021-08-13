import chalk from 'chalk';

import { queue } from './lib/queue';

const emails = [
  {
    email: 'Daniele Richter Odoni <daniele.odoni@gmail.com>',
  },
  {
    email: 'Alexandre Odoni <aleodoni@gmail.com>',
  },
  {
    email: 'Amora Richter Odoni <amora.odoni@gmail.com>',
  },
  {
    email: 'Tina Richter Odoni <tina.odoni@gmail.com>',
  },
];

async function sendEmail(): Promise<void> {
  const { log } = console;

  Object.entries(emails).forEach(async ([_, email]) => {
    queue
      .push(email)
      .then(messageId => {
        log(chalk.green(`Mail sent: ${messageId}`));
      })
      .catch(err => {
        log(chalk.red(`Error`, err));
      });
  });
}

sendEmail();
