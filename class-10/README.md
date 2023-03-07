# Class 10

## Objects

A key and value pair is called a **property**.

To assign a variable to an object:

```html
objectName.keyName = variable;
```

Where `keyName` is the name you want the key to be, and `variable` is the variable you want the value to be.

---

A **Method** is a function inside an object.

To assign a method to an empty object, we can use the syntax:

```html
objectName.keyName = function() { // function script };
```

Where `keyName` is the name you want the key to be, and thus the name of the method, and **_the script inside the funtion_** is the value.

---

To access a method in an object, we can use the syntax;

```html
objectName.keyName();
```

This is because it is a funtion, and not a string.

If you _do_ use the parenthesis, it will run the function.

If you _don't_ use the parenthesis, it will just give the code from the function.

---

## `this` Keyword

`this.keyName` refers to the object itself, which contains the method the `this` keyword is used in.

You can _only_ use the `this` keyword inside a method. It will not work outside of a method, as it refers to the object the method is in.

We can use this to save time.

The `this` keyword can also be used in event handlers, as it will refer to the element the event handler is in. For example:

```html
<button onclick="this.style.color = 'blue'">Button</button>
```

This will change the button's color to blue.

> In an object method, `this` refers to the object.
>
> Alone, `this` refers to the global object.
>
> In a function, `this` refers to the global object.
>
> In a function, in strict mode, `this` is undefined.
>
> In an event, `this` refers to the element that received the event.
>
> Methods like call(), apply(), and bind() can refer `this` to any object.

[Source: W3 Schools](https://www.w3schools.com/js/js_this.asp)

---

## Classes and Constructors

Classes and constructors are templates for building objects.

They can be used to write more efficient code, as instead of writing seperate objects for each possibility, we can simply make the template, and then add in properties.

To do this, we can use the syntax below:

```html
<script>

	// Adding the prompts for the different property pairs for the object.

	var objectKeyOne = prompt("");
	var objectKeyTwo = prompt("");
	var objectKeyThree = prompt("");
	var objectKeyFour = prompt("");

	// These don't have to be prompts, but can be any other way of collecting data.

	// Making the Object Blueprint:

	class objectExample {
	    constructor( _keyOne, _keyTwo, _keyThree, _keyFour) {
	        this.objectKeyOne = _keyOne ;
	        this.objectKeyTwo = _keyTwo ;
	        this.objectKeyThree = _keyThree ;
	        this.objectKeyFour = _keyFour ;
	    }

	    // To assign values to the class:

	    var inputOne = new objectExample(objectKeyOne, objectKeyTwo, objectKeyThree, objectKeyFour);
	}
</script>
```

The information from these objects can be stored in an array, or in a database.

To push the information to an array, we can use the code:

```
array.push(objectName);
```

---

## Using Methods in Classes and Constructors
