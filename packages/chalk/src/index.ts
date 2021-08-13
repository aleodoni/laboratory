import chalk from 'chalk';

const { log } = console;

const warning = chalk.hex('#FFA500'); // Orange color

log(chalk.red('Hello World'));
log(chalk.green('Pontal do Sul'));
log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
`);
log(warning('Warning!'));
