#!/usr/bin/env node
'use strict';

const axios = require('axios');
const chalk = require('chalk');
const program = require('commander');

const url = 'https://jsonplaceholder.typicode.com/photos';

function isPosInteger(value) {
  return /^\d+$/.test(value);
}

const getAlbumList = async (albumId) => {
  // album ID must be a positive whole number
  if (!isPosInteger(albumId)) {
    console.error(
      chalk.red('error: Argument <albumid> must be a number')
    );
    process.exit(1);
  }

  try {
    // await on get to resolve
    const response = await axios.get(
      url, {
        params: {
          albumId
        }
      }
    );
    
    const albumList = response.data;
    if(albumList.length > 0){
      albumList.forEach(photo => {
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
      chalk.red('Unable to complete request.')
    );
  }
}

program
  .version('0.0.1')
  .arguments('<albumid>')
  .action((albumid) => {
    getAlbumList(albumid);
  });

program.parse(process.argv);

// show error and help if we don't have exactly 1 argument
if (
  !process.argv.slice(2).length ||
  process.argv.slice(2).length > 1
) {
  console.error(
    chalk.red('error: invalid number of arguments')
  );
  program.help();
}
