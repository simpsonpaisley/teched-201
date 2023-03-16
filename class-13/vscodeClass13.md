# V's Code Class 13

## HTML Canvas

```html
<!DOCTYPE html>
<html>
	<head>
		<title>HTML Canvas</title>
	</head>
	<body>
		<div>
			<h1>HTML CANVAS</h1>
			<canvas
				id="myGraphics"
				style="
          width: 200px;
          height: 200px;
          padding: 10px;
          border: 1px solid black;
          background-color: antiquewhite;
        "
				>You can do your graphics here</canvas
			>
		</div>

		<script>
			var graphics = document.getElementById('myGraphics'); // this is to get the canvas tag element
			var rectangleShape = graphics.getContext('2d'); // We can have 2d graphics inside the element

			rectangleShape.beginPath(); // This started drawing the path
			rectangleShape.lineWidth = '10'; // This is for the width of the line
			rectangleShape.fillStyle = 'red'; // This is to fill the style
			rectangleShape.rect(10, 20, 100, 100); // (0,0) -> (4,4)
			rectangleShape.stroke(); // This means i want a straight line
		</script>
	</body>
</html>
```

---

## CSS Transformations

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS Transformations</title>
		<style>
			#transform-1 {
				border: 1px solid black;
				width: 50%;
				height: 100px;
				text-align: center;
				background-color: lightcoral;
				color: white;
				font-family: monospace;
				font-size: larger;
				transform: scale(0.5);
			}
		</style>
	</head>
	<body>
		<h1>CSS TRANSFORMATIONS</h1>

		<div id="transform-1">This is a box</div>
	</body>
</html>
```

---

## CSS Transitions

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS TRANSITIONS</title>
		<style>
			#box {
				border: 1px solid black;
				width: 50%;
				height: 100px;
				text-align: center;
				background-color: lightcoral;
				color: white;
				font-family: monospace;
				font-size: larger;
				transition: width 2s, background-color 4s, transform 2s;
			}

			#box:hover {
				background-color: seagreen;
				width: 70%;
				height: 200px;
				transform: rotate(30deg);
			}
		</style>
	</head>
	<body>
		<h1>CSS TRANSITIONS</h1>
		<div id="box">This is the treasure box</div>
	</body>
</html>
```

---

## Local Storage

```html

<!DOCTYPE html>
<html>
  <head>
    <title>Local Storage</title>
    <style>
      form {
        border: 1px solid black;
        width: 50%;
        padding: 3px;
      }
    </style>
  </head>
  <body>
    <div>
      <form onsubmit="formHandler()"">
        <input type="text" placeholder="Enter the name" name="student" /><br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
    <h1>Hey,<span id="display"></span> Welcome back</h1>
    <script>
      'use strict'

      let array = ["george","jane","carla","paisley"];

      var ele = document.getElementById('display');

      let student = localStorage.getItem("student");
      console.log(student);

      if(array.includes(student)){

        ele.innerText = student;

      }else{
        ele.innerText = "Fraud";
      }

      function formHandler(){
        event.preventDefault();

        let nameEntered = event.target.student.value;
        array.includes(nameEntered.toLowerCase());// check to see

        localStorage.setItem("student",nameEntered.toLowerCase());




        if(array.includes(nameEntered.toLowerCase())){

            ele.innerText = nameEntered;

            // LOCAL STORAGE
            // setter


        }else{
            ele.innerText = "Fraud";
        }


      }

    </script>
  </body>
</html>

```
