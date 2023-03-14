# V's Code Class 12

## Adding Videos and Audio Files

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Some image page</title>
		<style>
			body {
				background-color: aliceblue;
			}

			#header {
				width: 100%;
				height: 100px;

				border: 1px solid black;

				display: flex;
				justify-content: center;
			}

			#header h1 {
				font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
			}

			#imgZone {
				padding: 15px;

				display: flex;
				flex-flow: row wrap;

				gap: 30px 30px;
			}

			#imgZone img {
				border-radius: 6px;
				border: 1px solid darkblue;
				padding: 3px;

				width: 200px;
			}
		</style>
	</head>

	<body>
		<div id="header">
			<h1>Image Site</h1>
		</div>

		<div id="imgZone">
			<video
				width="320"
				height="240"
				autoplay
				muted>
				<source
					src="sample.mp4"
					type="video/mp4" />
				sample
			</video>

			<video
				autoplay
				muted>
				<source
					src="sample.mp4"
					type="video/mp4" />
			</video>

			<video controls>
				<source
					src="sample.mp4"
					type="video/mp4" />
			</video>

			<audio controls>
				<source
					src="sample.mp3"
					type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	</body>
</html>
```

---

## Debugging

```javascript
'use strict';

console.log('debug.js file is loaded');

/*
Multiple lines
for commenting
*/

// Variables

var a = 1; // number
var b = 'george dave'; // string
var c = true; // boolean
var d = {}; // object
var e = []; // array
var f = ''; // undefined
var g = 2;

/*

    -This function is for adding two numbers
    @param1:number
    @param2:number

*/
function add(a, b) {
	var a = a;
	var b = b;

	return a + b;
}

// Call the function
console.log(add(1, 2)); // 1,2 might come from a form
```
