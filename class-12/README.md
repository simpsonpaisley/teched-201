# Class 12

## Debugging

Debugging is the process of finding and removing errors from your code.

Debugging is also useful to check information we have inputted into arrays or objects is correct.

We can debug using the browser console, or using VSCode.

When linking an external JS file, we can use a `console.log()` to check the JS file is properly linked.

### Comments

To comment in JS, we can use

`// This is a comment`

To make a single line comment, or

```javascript
/*
This is a 
multi
line 
comment
*/
```

Comments should be used to explain your code for other people.

For example:

```javascript

/*
This function is for adding two numbers.
@param1 = number
@param2 = number
*/

function(a, b) {
    var a = a
    var b = b

    return a + b
}

```

### Unused Variables and Strict Mode

Unused variables should be avoided.

This is because they slow the program down as the computer tries to look for where the variable is declared.

To avoid these, we can use the line at the top of the JS file:

`"use strict"`

This will at first show more errors, as it will show silent errors, such as unused variables, as an error in the console.

It is less tolerant of errors than the default mode. This allows you to fix mistakes that were previously acceptable, as they will come up as errors.

This allows us to increase the speed of programmes, as we can eliminate the silent errors.

### console.trace()

`console.trace();` will give the sequence of operations before an error occurs.

### Syntax Errors

Syntax errors are errors in the code such as mistypings, punctuation, and spelling errors.

These also include missing brackets, quotes, and parenthesis.

### Reference Errors

Reference errors are errors when a variable doesn't exist in the current scope.

### Logic Errors

Logic errors are errors in the logic of the code.

### Type Errors

Type errors are errors which occur when an operation can't be performed when a value isn't of the expected type.
