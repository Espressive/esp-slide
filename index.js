#!/usr/bin/env node

/* eslint-disable no-console */

const program = require('commander');
const chalk = require('chalk');
const bs = require('browser-sync').create();

program
  .arguments('<file>')
  .action((file) => {
    console.log(chalk.bold.green('Generating slides for file: ') + file);

    bs.init({
      serveStatic  : ['.'],
      server       : './node_modules/esp-slide/app',
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
