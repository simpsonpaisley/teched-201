# Class 13

## HTML Canvas

The `<canvas>` tag is used to create a space to create animated graphics in css.

Every `<canvas>` tag should have an id, so it can be accessed in JS.

We can then use the following code to create the graphic.

```javascript
var graphic = document.getElementById('canvasID');

var variableName = graphic.getContext('2d'); // tells the code that we will be making a 2D graphic.

rectangleShape.beginPath(); // starts drawing the path.
rectangleShape.rect(x1, y1, x2, y2); // setting the origin and destination points of a rectangle. The origin point is the bottom left corner, and the destination point is the top right corner.

rectangleShape.stroke(); // draws the outline.

//To change the line width:

rectangleShape.lineWidth = '20';

// To Fill the Graphic with color:

rectangleShape.fillStyle = 'red';
```

---

## CSS Transformations

Transformation in CSS allows you to transform elements in CSS. For example, rotate, scale, move, skew etc.

---

![CSS Transformations](https://www.htmlgoodies.com/wp-content/uploads/2021/04/ss_transform.png)

[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.htmlgoodies.com%2Fhtml5%2Fcss-3d-transform%2F&psig=AOvVaw1wMbDktoqypKmcpaetJc1X&ust=1678907202900000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjaue6O3P0CFQAAAAAdAAAAABAD)

---

### To Rotate:

```html
<style>
	#element {
		transform: rotate(50deg);
	}
</style>
```

### To rotate an element on either the x or y axis:

```html
<style>
	#element {
		transform: rotateX(50deg);
	}
</style>
```

### To translate an element:

```html
<style>
	#element {
		transform: translate(20px, 20px);

	        <!-- Translates the element 20px on the x and y axis from the origin point -->
	}
</style>
```

### To change the size of an element:

```html
<style>
	#element {
		transform: scale(2);

	       <!-- Makes the element twice as big-->
	}
</style>
```

---

## CSS Transitions

Transitions allow you to change from one element property to another smoothly with a set duration.

For Example:

```html

<style>

    #box {
        background-color: blue;
        transition: width 2s;
    }

    #box:hover {
        width: 200%;
    }

```

This will make it so the transition from the original width to the new width takes 2 seconds.

---

## CSS Animations

To make CSS animations, we can use the property `@keyframes`.

This is used to create a template for the animation.

For example:

```html
<style>
	@keyframes templateName {
		0% {
			background-color: red;
		}

		50% {
			background-color: orange;
		}

		100% {
			background-color: yellow;
		}
	}
</style>
```

The percentages mean at the percentage through the animation duration, is when the change will finish.

This then needs to be called for in the element style you want to use it on, along with the duration you want the animation to last:

```html
<style>
	#element {
		animation-name: templateName;
		animation-duration: 5s;
	}
</style>
```
