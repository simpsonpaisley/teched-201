# Class 02

## What we Learnt in this Class

- Went Over Arrays
- The || Operator
- Conditionals
- For Loops
- CSS Styling

---

## Arrays

An array is a variable which can hold multiple values.

Each array item is assigned an index number, starting with 0.

An array _should_ only contain a single data type.

To make an array, you can use the following syntax:

```html
<script>
	var newArray = ['arrayItem', 'arrayItem'];
</script>
```

Some more useful array syntax:

- `newArray[index number]` - to access an item in an array.
- `newArray[index number] = "newData" ` - to change an item in an array.
- `newArray.sort()` - to sort an array.
- `newArray.length` - to see how many items are in an array.
- `newArray.push("Item)` - to add a new item to the end of an array.
- `newArray.pop()` - to remove the last element in an array.

---

## The || Operator

The `||` operator means or. It can be used in conditionals to allow for multiple possibilities, such as spelling differences etc.

For Example:

```html
<script>

	var userName = prompt("Please Enter Your Username");

	if (userName == "username" || userName == "Username") {
	    console.log("Welcome") else {
	        console.log("Access Denied!");
	    }
	}
</script>
```

---

## Conditionals

These can be used to check if a specified condition is true or false, and then run some script based on this.

If there are more than 2 different conditions, you can use `else if`.

For example:

```html
<script>
	var name = prompt('What is Your Name?');

	if (name == 'Paisley') {
		console.log("Hey, that's my name too!");
	} else if (name == 'Edward') {
		console.log("That's my brother's name!");
	} else {
		console.log('Hello!');
	}
</script>
```

---

## For Loops

For Loops can be used to loop through a block of code a number of times.

They can have 3 expressions, and are written using the syntax below:

```html
<script>
	for (let i = 0; i < 5; i++) {
		// script
	}
</script>
```

In the code above, the expressions mean the following things:

- `i = 0;` - this means the variable `i` before the loop starts is 0.
- `i < 5` - this defines the condition under which the loop will run, in this case when `i` is less than 5.
- `i++` - this defines how much the variable `i` will increase each time the code block loops around.

For Loops can be used to check arrays for values, and for code which you want to run a certain amount of times.

---

## Other Types of Loops

As well as for loops, there are several other types which can be used for different purposes, as shown below:

> `for` - loops through a block of code a number of times.
>
> `for/in` - loops through the properties of an object.
>
> `for/of` - loops through the values of an iterable object.
>
> `while` - loops through a block of code while a specified condition is true.
>
> `do/while` - also loops through a block of code while a specified condition is true.

[Source: W3 Schools](https://www.w3schools.com/js/js_loop_for.asp)
