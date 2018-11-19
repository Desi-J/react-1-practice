# Project Summary

In this project we will be using methods to store what the user inputs for each ```<input />``` and ```<textarea>``` tag.  After this has been accomplished we will conditionally show/hide the form depending on whether or not the user has clicked the **Edit** button.  The skeleton of the project is already created, but none of the functionality is implemented.  

The purpose of this exercise is to better understand and practice several concepts:

- Creating methods in React.
- The ```this``` keyword.
- Different types of binding.
- Conditional class names.

# Setup
- ```Fork``` and ```clone``` this repository.
- ```cd``` into the project directory.
- Run ```npm install```.
- After ```npm install``` has finished run ```npm start```.

# Step 1 - Store user input in state

## Summary

In ths step, we will be creating the methods used to store user input in our component's state.

## Instructions
- Open ```src/App.js```.
- Scroll down until you see the first ```<input />``` tag below the Image URL ```<label>``` tag .
- Add an ```onChange``` event to this input.
- Inside this event, we will add a method called ```handleURL``` (Don't forget the ```this``` keyword).

Now lets create the ```handleURL``` method:
- Start by declaring a function called handleURL.

> *Note: In class components we declare and define our methods in between the ```constructor``` & ```render()```.*
- This function should take in one parameter.  We'll call it ```event```, but it's just a variable; it can be named anything.
- Using this ```event```, we'll update our ```img_url``` state from an empty string to the event target's value using ```this.setState({})```.
- Bind the function inside the constructor method.

Repeat these instructions and create methods for the remaining inputs.  Try to use different forms of binding.

# Step 2 - Conditional CSS

## Summary

In this step, we will only show the form if the user clicks ```Edit``` and hide the form when the user clicks ```Save```.  The CSS is done for you, so all you'll be doing is manipulating class names.

> *Note the ```edit: false``` in our component's state.  We will be referring to this below.*

## Instructions
- Open ```src/App.js```.
- Scroll down until you find the ```form``` tag.
- Inside ```className```, only have the value equal ```.show-form``` if ```this.state.edit``` is true.

Now lets create a method to toggle ```this.state.edit``` between ```true``` and ```false```.
- Start with declaring a function called ```toggleEdit```.  This function takes in no parameters.
- In order to mimic toggling functionality, we need to set ```this.state.edit```'s value to be the opposite of its current value every time this function is fired (Hint: use the bang operator).
- Don't forget to ```bind``` the function!

## Bonus
We can also conditionally render text.

Using what you learned from conditionally rendering a className, let's show the text ```'Save'``` if ```this.state.edit``` is true and the text ```'Edit'``` if ```this.state.edit``` is false. 

- Open ```src/App.js```
- Scroll down until you find the ```<button>``` tag with the text, ```'Edit'```.
- Conditionally render text between the open and closed button tags.