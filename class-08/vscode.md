# V's Code Class 07

## Flexbox Example

```html
<!-- Example of a flexbox -->
<!DOCTYPE html>
<html>
	<head>
		<title>Flexbox</title>
		<style>
			body {
				margin: 0px;
			}
			.header {
				border: 1px solid black;
			}
			.main {
				border: 1px solid black;
			}
			.footer {
				border: 1px solid black;
			}
			.student {
				border: 1px solid black;
				padding: 2px;
				width: 200px;
				height: 100px;
				background-color: bisque;
			}
			ul {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}
		</style>
	</head>
	<body>
		<div class="header">
			<h1>Header</h1>
		</div>
		<div class="main">
			<ul style="list-style-type: none">
				<li class="student">Jez</li>
				<li class="student">George</li>
				<li class="student">Carla</li>
				<li class="student">Paisley</li>
				<li class="student">Jane</li>
			</ul>
		</div>
		<div class="footer">
			<h1>Footer</h1>
		</div>
	</body>
</html>
```

## Media Queries Example

```html
<!-- Creating a basic layout using css positioning -->
<!DOCTYPE html>
<html>
	<head>
		<title>Salmon Cookies</title>

		<style>
			body {
				margin: 0px;
			}

			.header {
				border: 1px solid black;
				background-color: red;
			}

			/* Media queries */
			/* Mobile view */
			@media (min-width: 300px) {
				.header {
					border: 1px solid black;
					background-color: lightblue;
				}
			}
			/* tablet view */
			@media (min-width: 500px) {
				.header {
					border: 1px solid black;
					background-color: blue;
				}
			}
			/* Full view */
			@media (min-width: 700px) {
				.header {
					border: 1px solid black;
					background-color: darkblue;
				}
			}

			.main {
				border: 1px solid black;
				min-height: 400px;
				display: flex;
				flex-direction: row;
			}

			.side {
				border: 1px solid black;
				width: 30%;
			}

			.hero {
				border: 1px solid black;
				width: 70%;
			}

			@media (max-width: 300px) {
				.main {
					display: flex;
					flex-direction: column;
				}

				.side {
					border: 1px solid black;
					width: 100%;
					height: 200px;
				}

				.hero {
					border: 1px solid black;
					width: 100%;
					height: 200px;
				}
			}
		</style>
	</head>
	<body>
		<div class="header">Header</div>
		<div class="main">
			<div class="side">
				<button onclick="clickHandler()">Create +</button>
			</div>
			<div class="hero">HERO</div>
		</div>
		<div class="footer">Footer</div>

		<script>
			function clickHandler() {
				// Step 1: Create two prompts
				var city = prompt('What is the city?');
				var customers = prompt('How many customers?');
				console.count('Step');

				// Step 2: Create a new table row
				var newRow = document.createElement('tr');
				console.count('Step');

				// Step 3 : Create two table data
				var cityCell = document.createElement('td');
				var custCell = document.createElement('td');
				console.count('Step');

				// Step 4: Populate the data to the two cells
				cityCell.innerText = city;
				custCell.innerText = customers;
				console.count('Step');

				// Step 5: Append the children to the table row
				newRow.appendChild(cityCell);
				newRow.appendChild(custCell);
				console.count('Step');

				// Step 6: fiirst get the table
				var parentElement = document.getElementById('parent');
				console.count('Step');

				// Step 7 : Append the table row to the table
				parentElement.appendChild(newRow);

				console.count('Step');
			}
		</script>
	</body>
</html>
```
