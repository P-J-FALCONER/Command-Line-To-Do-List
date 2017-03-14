#!/usr/bin/env node
var program = require('commander')
var package = require('./package.json')
var chalk = require('chalk') //need to force color 

// Standard Lists Template
var To_Do_Lists = {
  "Personal":['test', 'test'],
  "Work":['test', 'test'],
  "Random":['test', 'test']
}
var Completed = {
  "Personal":['test', 'test'],
  "Work":['test', 'test'],
  "Random":['test', 'test']
}

function showFunction(list = false) {
  if (To_Do_Lists.hasOwnProperty(list)) {
    var results = To_Do_Lists[list]
    console.log(list)
    for (var i = 0; i < results.length; i++) {
      console.log('\t', results[i])
    }
  }else{
    for (var key in To_Do_Lists) {
      var results = To_Do_Lists[key]
      console.log(key)
      for (var i = 0; i < results.length; i++) {
        console.log('\t', results[i])
      }
    }
  }
  
}

function editFunction(){

}

function createFunction(list){
  if (To_Do_Lists.hasOwnProperty(list, item) && item) {
    To_Do_Lists[list].push(item)
    showFunction(list);
  }else{
    console.log('Please Enter List and New Item as Arguments')
    console.log('e.g. create Personal Pay')
  }
}

function deleteFunction(){

}

program //show
  .version(package.version)
  .command('show [list]')
  .description('Show all To-Do lists, or a specific list if list name is passed as an arguement')
  .action(showFunction)

program // create
  .command('create <list> <item>')
  .description('Allows you to create an Item on a todo list')
  .action(createFunction)

program // edit
  .command('edit <list> [item]')
  .description('Allows you to create an Item on a todo list')
  .action(createFunction)

program // delete
  .command('delete [list] [item]')
  .description('Allows you to delete all lists, a single list, or a single item in a list')
  .action(createFunction)

program.parse(process.argv);
if (program.args.length === 0) program.help();