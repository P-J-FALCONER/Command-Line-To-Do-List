#!/usr/bin/env node
var program = require('commander')
var package = require('./package.json')
var colors = require('colors'); 
var data = require('prettiest')();

function showFunction(list = false) {
  var color_counter = 0
  if (data.hasOwnProperty(list)) {
    var results = data[list]
    console.log(list.red.underline)
    for (var i = 0; i < results.length; i++) {
      console.log('\t', results[i].bgRed)
    }
  }else{
    for (var key in data) {
      var results = data[key]
      console.log(key.red.underline)
      for (var i = 0; i < results.length; i++) {
        console.log('\t', results[i].bgRed)
      }
      color_counter++ 
    }
  }
  
}

function createFunction(list, item){
  if (data.hasOwnProperty(list) && item) {
    data[list].push(item)
    showFunction(list);
  }else if (list){
    data[list] = []
    showFunction(list)
  }
}

function editFunction(){

}

function deleteFunction(){

}

program //show
  .version(package.version)
  .command('show [list]')
  .description('Show all To-Do lists, or a specific list if list name is passed as an arguement')
  .action(showFunction)

program // create
  .command('create <list> [item]')
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