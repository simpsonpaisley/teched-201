```html
<!DOCTYPE html>

<html lang="en">
	<head>
		<title>Lab 05</title>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1"
		/>

		<link
			rel="preconnect"
			href="https://fonts.googleapis.com"
		/>
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossorigin
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
			rel="stylesheet"
		/>
		<link
			rel="preconnect"
			href="https://fonts.googleapis.com"
		/>
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossorigin
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
			rel="stylesheet"
		/>

		<style>
			body {
				/*height: 1000px;
				width: 1000px; */
				font-family: 'Roboto', sans-serif;
			}

			#side {
				background-color: blue;
				text-align: center;
				width: 250px;
				height: 1000px;
				position: relative;
				top: 60px;
				left: -3px;
				border-right: 2px solid black;
			}

			main {
				background-color: green;
				text-align: center;
				width: 1258px;
				height: 1000px;
				position: relative;
				top: -961px;
				left: 246px;
				background-image: linear-gradient(to right, blue, rgb(201, 201, 231));
				border-left: 5px solid black;
			}

			header {
				background-color: salmon;
				position: fixed;
				top: 1px;
				right: 1px;
				bottom: 690px;
				left: 1px;
				text-align: center;
			}

			header img {
				width: 75px;
				height: 75px;
				position: absolute;
				top: 2px;
				right: 100px;
				bottom: 10px;
				left: 1400px;
				border: 3px solid blue;
				border-radius: 50%;
			}

			h1 {
				color: white;
				text-shadow: 5px 2px black;
				font-weight: 900;
				font-size: 30px;
				font-family: 'Bungee', cursive;
				line-height: 50px;
			}

			footer {
				background-color: salmon;
				text-align: center;
				position: relative;
				height: 100px;
				width: 2000px;
				top: -978px;
				left: -5px;
			}

			button {
				position: absolute;
				top: 100px;
				left: 100px;
			}

			table {
				position: absolute;
				top: 100px;
				left: 300px;
			}

			h2 {
				position: relative;
				top: 50px;
			}

			table,
			th,
			td {
				background-color: white;
				border: 3px solid black;
				padding: 10px 3px 10px 3px;
			}

			table {
				width: 500px;
				background-color: salmon;
				border-radius: 10px;
			}

			th {
				background-color: #4834d4;
				color: white;
			}

			td {
				background-color: rgb(201, 201, 231);
			}
		</style>
	</head>

	<body>
		<div id="side">
			<button onclick="addLocationHandler()">Create +</button>
		</div>

		<main>
			<h2>Locations</h2>
			<table id="parent">
				<tr>
					<th>Location</th>
					<th>Minimum Customers</th>
					<th>Maximum Customers</th>
					<th>Cookies Sold</th>
				</tr>
			</table>
		</main>

		<header>
			<h1>Salmon Cookies</h1>
			<img
				src="salmon.png"
				alt="salmon.png"
			/>
		</header>

		<footer>
			<h1>FOOTER</h1>
		</footer>

		<script>
			function addLocationHandler() {
				var locationName = prompt('Please Enter the Location');
				var minCustomerNumber = prompt('Please Add Minimum Customer Amount');
				var maxCustomerNumber = prompt('Please Add Maximum Customer Amount');
				var cookiesSold = prompt('Please Add Cookies Sold');

				var createRow = document.createElement('tr');

				var locationCell = document.createElement('td');
				var minCell = document.createElement('td');
				var maxCell = document.createElement('td');
				var soldCell = document.createElement('td');

				locationCell.innerText = locationName;
				minCell.innerText = minCustomerNumber;
				maxCell.innerText = maxCustomerNumber;
				soldCell.innerText = cookiesSold;

				createRow.appendChild(locationCell);
				createRow.appendChild(minCell);
				createRow.appendChild(maxCell);
				createRow.appendChild(soldCell);

				document.getElementById('parent').appendChild(createRow);
			}
		</script>
	</body>
</html>
```
