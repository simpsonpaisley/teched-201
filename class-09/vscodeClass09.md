# V's Code Class 09

## Objects and Methods

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pirates of Objects</title>
	</head>
	<body>
		<h1>Pirates and their drinks</h1>

		<button onclick="studentSelector()">Select The student</button>

		<script>
			// Step1: Create a function to start the selection
			function studentSelector() {
				console.log('yo ho ho');

				var studentName = prompt('Enter the student name');

				if (studentName == 'george') {
					var georgeObj = {};

					georgeObj.age = 50;
					georgeObj.hairColor = 'blonde';
					georgeObj.eyeColor = 'green';

					// A function inside a object is called as a "Method"
					//   function show() {
					//     alert("George is in London");
					//   }

					georgeObj.thisIsSomethingINamed = function () {
						alert('George is in London');
					};

					georgeObj.thisIsSomethingINamed(); // Im calling the method or Im using the method
				} else if (studentName == 'carla') {
					var carlaObj = {};

					carlaObj.siblingsCount = 4;
					carlaObj.petsCount = 1;
					carlaObj.stuffedAnimals = 'Dont bother';

					//Method
					carlaObj.thisIsCarlasMethod = function () {
						var a = 1;
						var b = 2;
						var c = a + b;
						console.log('hug' + c + 'pushies');
					};

					carlaObj.thisIsCarlasMethod();
				} else if (studentName == 'jane') {
					var janeObj = {};

					janeObj.eyeColor = 'Brown';
					janeObj.hairColor = 'Brown';
					janeObj.siblingsCount = 2;

					// Method
					janeObj.thisIsJanesWayOfDoingIt = function () {
						var a = 5;
						var b = 6;

						console.log('Jane swimmed ' + a + b + ' miles');
					};

					janeObj.thisIsJanesWayOfDoingIt();
				}
			}
		</script>
	</body>
</html>
```
