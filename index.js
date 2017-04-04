#!/usr/bin/env node
var program = require('commander')
var package = require('./package.json')
var colors = require('colors'); 
var data = require('prettiest')();
var clear = require('clear')


function showFunction(list = false) {
  if (data.hasOwnProperty(list)) {
    clear();
    var results = data[list]
    console.log(list.magenta.underline)
    for (var i = 0; i < results.length; i++) {
      if (true){
        console.log('\t', results[i]['item'].bgMagenta+" ("+results[i]['created_at'].red.bold+")")
      }else{
        console.log('\t', results[i]['item'].bgMagenta+" ("+results[i]['created_at']+")")
      }
    }
  }else{
    clear();
    for (var key in data) {
      var results = data[key]
      console.log(key.magenta.underline)
      for (var i = 0; i < results.length; i++) {
        if (true){
          console.log('\t', results[i]['item'].bgMagenta+" ("+results[i]['created_at'].red.bold+")")
        }else{
          console.log('\t', results[i]['item'].bgMagenta+" ("+results[i]['created_at']+")")
        }
      }
    }
  }
}

function createFunction(list, item){
  if (data.hasOwnProperty(list) && item) {
    var created_datetime = new Date()
    var dd = created_datetime.getDate();
    var mm = created_datetime.getMonth()+1;
    var yyyy = created_datetime.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var created_datetime = mm+'/'+dd+'/'+yyyy;
    data[list].push({item:item, created_at:created_datetime});
    showFunction();
  }else if (list){
    data[list] = []
    showFunction();
  }
}

function deleteFunction(list=false, item){
  if(!list){
    console.log("NEED TO ENTER A LIST NAME".red.bold)
  }
  else if (data.hasOwnProperty(list) && !item){
    delete data[list];
    console.log("REMOVED ".red.bold+list.red.bold+" FROM TO-DO LISTS".red.bold)
  }
  else if (data.hasOwnProperty(list)){
    var delete_index
    for (var index = 0; index < data[list].length; index++) {
      if (data[list][index].item == item){
        delete_index = index;
      }
    }
    console.log(delete_index)
    if (delete_index || delete_index == 0){
      data[list].splice(delete_index, 1);
      console.log("REMOVED ".red.bold.underline+item.red.bold+" from ".red.bold+list.red.bold+" List".red.bold)
    }else{
      console.log('INCORRECT ITEM OR LIST PLEASE RETRY AND CHECK'.red.bold)
    }
    
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