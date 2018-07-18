#!/usr/bin/env node

/* eslint-disable no-console */

const program = require('commander');
const chalk = require('chalk');
const bs = require('browser-sync').create();
const globalModules = require('global-modules');
const parrotSay = require('parrotsay-api');

program
  .arguments('<file>')
  .action((file) => {
    if (file) {
      parrotSay(chalk.bold.green(' Generating slides for file: ') + chalk.bold.cyan(file) + ' ')
        .then(console.log)
        .catch(console.error)
    }
    else {
      console.error(chalk.bold.red('💩 You need to provide a filename for this to work.'));
    }

    bs.init({
      serveStatic  : ['.'],
      server       : globalModules + '/@espressive/esp-slide/app',
      watch        : true,
      files        : ['*.md','*.css'],
      rewriteRules : [
        {
          match   : /FILENAME_HERE/g,
          replace : file || 'SLIDES.md',
        },
      ],
    });
  });

program.parse(process.argv);
