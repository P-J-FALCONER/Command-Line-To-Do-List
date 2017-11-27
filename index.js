#!/usr/bin/env node
var program = require('commander'),
    package = require('./package.json'),
    colors = require('colors'),
    data = require('prettiest')(),
    figlet = require('figlet'),
    clear = require('clear');


function showFunction(list = false) {
  clear();
  if (Object.keys(data).length == 0) {
    console.log(figlet.textSync('Empty', {
      font: 'Modular'
    }));
  } else if (data.hasOwnProperty(list)) {
    var results = data[list];
    console.log('\u2605'.green.bold +" "+ list.white.underline);
    for (var i = 0; i < results.length; i++) {
      if (results[i]['created_at'].getMonth) {
        console.log('\t','\u2714'.green.bold + " " + results[i]['item'].white+" ("+results[i]['created_at'].red.bold+")");
      } else {
        console.log('\t','\u2714'.green.bold + " " + results[i]['item'].white+" ("+results[i]['created_at']+")");
      }
    }
  } else {
    for (var key in data) {
      var results = data[key];
      console.log('\u2605'.green.bold +" "+key.white.underline);
      for (var i = 0; i < results.length; i++) {
        if (results[i]['created_at'].getMonth) {
          console.log('\t', '\u2714'.green.bold + " " + results[i]['item'].white+" ("+results[i]['created_at'].red.bold+")");
        } else {
          console.log('\t', '\u2714'.green.bold + " " + results[i]['item'].white+" ("+results[i]['created_at']+")");
        }
      }
    }
  }
}

function createFunction(list, item) {
  list = allToUpper(list);
  item = allToUpper(item);
  if (data.hasOwnProperty(list) && item) {
    var created_datetime = Date();
    data[list].push({item:item, created_at:created_datetime});
    showFunction();
  } else if (list) {
    data[list] = [];
    showFunction();
  }
}

function deleteFunction(list=false, item) {
  if (!list) {
    console.log("NEED TO ENTER A LIST NAME".red.bold);
  }
  else if (data.hasOwnProperty(list) && !item) {
    list = allToUpper(list);
    delete data[list];
    console.log("REMOVED ".red.bold+list.red.bold+" FROM TO-DO LISTS".red.bold);
  }
  else if (data.hasOwnProperty(list) && item) {
    var delete_index;
    for (var index = 0; index < data[list].length; index++) {
      if (data[list][index].item == item) {
        delete_index = index;
      }
    }
    if (delete_index || delete_index == 0) {
      data[list].splice(delete_index, 1);
      console.log("REMOVED ".red.bold.underline+item.red.bold+" from ".red.bold+list.red.bold+" List".red.bold);
    } else {
      console.log('INCORRECT ITEM OR LIST PLEASE RETRY AND CHECK'.red.bold);
    }
    
  } else {
    console.log('INCORRECT ITEM OR LIST PLEASE RETRY AND CHECK SPELLING'.red.bold);
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
  .command('delete <list> [item]')
  .description('Allows you to delete all lists, a single list, or a single item in a list')
  .action(deleteFunction)

program.parse(process.argv);
if (program.args.length === 0) program.help();

function allToUpper(str)
{
    return str.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}