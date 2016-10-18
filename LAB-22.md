![cf](https://i.imgur.com/7v5ASc8.png) lab 22 cowsay client
======

# To Submit this Assignment
  * contiue working from lab 21
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Client Functionality
* refacor lab-21 to use **controller as** syntax
* refactor your input into a form
 * use four angular form validator attribute directives on your input
 * add a class to your form if its invalid using ng-class
* add a button that uses the ng-click directive to populate a second pretag with the current pretag state
* add a second button that uses the `ng-click` directive to create an **undo** effect
 * whenever this button is clicked it should reset the second pretag with the content it last showed
* add a select menu that uses the `ng-repeat` directive 
 * use the `ng-repeat` to populate the select menu with the names of all cowsay files 
 * hint: `cowsay.list((err, list) => {})`
 * when a cowsay filename is selected from the menu, have the first pre tag use that cowfile
* find a place to use ng-show, ng-hide and ng-if 
* use ng-init to initialize a default property on the scope
* use ng-class four times

# Tests
* write 100 test
 * **jk**
