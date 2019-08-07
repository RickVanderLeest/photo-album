#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const program = require('commander');

const { getPhotoListByAlbumId } = require('./api');

program
  .version('0.0.1')
  .arguments('<albumid>')
  .action(async (albumId) => {
    try {
      const photoList = await getPhotoListByAlbumId(albumId);

      if (photoList.length > 0) {
        photoList.forEach(photo => {
          console.log(
            chalk.green(`[${photo.id}] ${photo.title}`)
          );
        });
      }
      else {
        console.log(
          chalk.yellow('No photos found.')
        );
      }
    }
    catch(err) {
      console.error(
        chalk.red('Unable to complete request.', err)
      );
    }
  });

program.parse(process.argv);

if (process.argv.slice(2).length !== 1) {
  console.error(
    chalk.red('Error: Invalid number of arguments')
  );
  program.help();
}
