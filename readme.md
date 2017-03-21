# Command Line To-Do List
![alt text](https://github.com/P-J-FALCONER/CLI_To-Do_List/blob/master/To-Do.gif "Logo Gif")
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
#### In some cases you may need to edit your computers permissions to use these commands without sudo, please refer to NPM <a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions">directions</a> on how to do so 

### Install
 ```
 npm install To-Do-List -g
 ```
### Show All Lists
 ```
 td show 
 ```
### Show Specific List
 ```
 td show "List Name"
 ```
### Create List
 ```
 td create "List Name"
 ```
### Create Item in List
 ```
 td create "Existing List" "New Item"
 ```
### Delete All Lists
 ```
 td delete
 ```
### Delete List
 ```
 td delete "List Name"
 ```
### Delete Item in List
 ```
 td delete "List Name" "Item Name"
 ```
 ---
## Change-Log
### Version 1.0.2
 * Lists names are displayed in magenta while list items are displayed with magenta background.
 * Create, Delete, Show Functions
### Version 1.0.3
 * 

---
## Future Changes
 * Create due dates and change color based on date
 * add gif for each command
 * tab completion on list name and items
 * created at time and due date