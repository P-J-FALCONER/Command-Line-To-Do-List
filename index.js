#!/usr/bin/env node
var program = require('commander')
var package = require('./package.json')
var colors = require('colors'); 
var data = require('prettiest')();

function showFunction(list = false) {
  var color_counter = 0
  if (data.hasOwnProperty(list)) {
    var results = data[list]
    console.log(list.magenta.underline)
    for (var i = 0; i < results.length; i++) {
      console.log('\t', results[i].bgMagenta)
    }
  }else{
    for (var key in data) {
      var results = data[key]
      console.log(key.magenta.underline)
      for (var i = 0; i < results.length; i++) {
        console.log('\t', results[i].bgMagenta)
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

function deleteFunction(list=false, item){
  if(!list){
    data = {}
    console.log("REMOVED ALL TO-DO LISTS".red.bold)
  }
  else if (data.hasOwnProperty(list) && !item){
    delete data[list];
    console.log("REMOVED ".red.bold+list.red.bold+" FROM TO-DO LISTS".red.bold)
  }
  else if (data.hasOwnProperty(list) && data[list].includes(item)){
    var delete_index = data[list].indexOf(item)
    data[list].splice(delete_index, 1);
    console.log("REMOVED ".red.bold.underline+item.red.bold+" from ".red.bold+list.red.bold+" List".red.bold)
  }else{
    console.log('INCORRECT ITEM OR LIST PLEASE RETRY AND CHECK SPELLING'.red.bold)
  }
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

program // delete
  .command('delete [list] [item]')
  .description('Allows you to delete all lists, a single list, or a single item in a list')
  .action(deleteFunction)

program.parse(process.argv);
if (program.args.length === 0) program.help();