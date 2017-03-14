#!/usr/bin/env node
var program = require('commander')
var package = require('./package.json')
// require chalk for color


// Standard Lists Template
var To_Do_Lists = {
  "Personal":['test', 'test'],
  "Work":['test', 'test'],
  "Random":['test', 'test']
}

function showFunction(list = false) {
  if (To_Do_Lists.hasOwnProperty(list)) {
    var results = To_Do_Lists[list]
    console.log(list)
    for (var i = 0; i < results.length; i++) {
      console.log('\t'+'--', results[i])
    }
  }else{
    for (var key in To_Do_Lists) {
      var results = To_Do_Lists[key]
      console.log(key)
      for (var i = 0; i < results.length; i++) {
        console.log('\t'+'--', results[i])
      }
    }
  }
  
}

function editFunction(){

}

function createFunction(){

}

function deleteFunction(){

}

program
  .version(package.version)
  .command('show [list]')
  .description('Show all To-Do lists, or a specific list if list name is passed as an arguement')
  .action(showFunction)
program.parse(process.argv);
if (program.args.length === 0) program.help();



// delete list required to pass in list to delete option to delete all lists
// delete item pass in list and id
// edit item content pass in list and id
// edit list name pass in list name