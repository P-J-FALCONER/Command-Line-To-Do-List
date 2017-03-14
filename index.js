#!/usr/bin/env node
var program = require('commander')
var package = require('./package.json')
// require chalk for color


// Standard Lists Template
var To_Do_Lists = {
  "Personal":[],
  "Work":[],
  "Random":[]
}

program
  .version(package.version)
  .command('show [list]') // show to-do lists with option to pass in specific list
  .description('Show all To-Do lists, or a specific list if list name is passed as an arguement')
  .action('')
program.parse(process.argv);



  .option('') // delete list required to pass in list to delete option to delete all lists
  .option('') // delete item pass in list and id
  .option('') // edit item content pass in list and id
  .option('') // edit list name pass in list name