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
 td delete list_name item_name
 ```
 ---
## Change-Log
### Version 1.0.1
 * Lists names are displayed in magenta while list items are displayed with magenta background.
 * Create, Delete, Show Functions
### Version 1.0.2
 * Fix issue with permissions on global install
 * tab completion on list name and items
 * created at time and due date
---
## Future Changes
 * Different color for each list
 * Create due dates and change color based on date
 * allow to create items and list names longer than one word with spaces
 * add tab completeion using tabtab
 * fix issue with sudo for global install
 
