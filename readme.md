# Command Line To-Do List
## Description
### A command line tool that allows you to create a To-Do lists. Built using Node.js.
## Author
  * <a href="https://github.com/P-J-FALCONER">Patrick Falconer</a>
## Dependencies
## How To Use

### Install
 ```
 npm install (NPM Name) -g
 ```
### Show All Lists
 ```
 todo show 
 todo -s 
 ```
### Show Specific List
 ```
 todo show list_name
 todo -s list_name
 ```
### Create List
 ```
 todo create list_name
 todo -c list_name
 ```
### Create Item in List
 ```
 todo create existing_list item
 todo -c existing_list item
 ```
### Delete All Lists
 ```
 todo delete
 todo -d
 ```
### Delete List
 ```
 todo delete list_name
 todo -d list_name
 ```
### Delete Item in List
 ```
 todo delete listname itemname
 todo -d list_name item_name
 ```
## Change-Log
### Version 0.0.1
 * Lists names are displayed in red while list items are displayed with red background.
 * Fully funtioning
## Future Changes
 * Different color for each list
 * Create due dates and change color based on date
 * allow for easy create and deleting of items
 
