# Command Line To-Do List
---
## Description
### A command line tool that allows you to create a To-Do lists. Built using Node.js and Commander a command-line framework.
---
## Author
  * <a href="https://github.com/P-J-FALCONER">Patrick Falconer</a>
---
## Dependencies
  ```
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "prettiest": "^1.0.0"
  ```
---
## How To Use

### Install
 ```
 npm install (NPM Name) -g
 ```
### Show All Lists
 ```
 td show 
 ```
### Show Specific List
 ```
 td show list_name
 ```
### Create List
 ```
 td create list_name
 ```
### Create Item in List
 ```
 td create existing_list item
 ```
### Delete All Lists
 ```
 td delete
 ```
### Delete List
 ```
 td delete list_name
 ```
### Delete Item in List
 ```
 td delete listname itemname
 ```
 ---
## Change-Log
### Version 1.0.0
 * Lists names are displayed in magenta while list items are displayed with magenta background.
 * Create, Delete, Show Functions
---
## Future Changes
 * Different color for each list
 * Create due dates and change color based on date
 * allow for easy create and deleting of items
 * allow to create items and list names longer than one word with spaces
 * add tab completeion using tabtab
 
