# Lab 05

1️⃣ | Create a header with fixed position to the top

2️⃣ | Create a side bar with two buttons and it each button should ask four questions each

3️⃣ | On the main bar you need to have all the answers rendered as a list

4️⃣ | Display any four images of your choice

5️⃣ | Footer should have the content as discussed in the class.

Extra points

1️⃣ | Good color formatting

2️⃣ | using VS Code

3️⃣ | Good and clean code

4️⃣ | Good naming of variables and functions

```
<!DOCTYPE html>

<html>
	<head>
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
				height: 1000px;
				width: 1000px;
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
				background-color: purple;
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
				background-image: linear-gradient(to right, purple, rgb(228, 106, 228));
				border-left: 5px solid black;
			}

			header {
				background-color: red;
				position: fixed;
				top: 1px;
				right: 5px;
				left: 5px;
				right: 5x;
				text-align: center;
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
				background-color: orange;
				text-align: center;
				position: relative;
				height: 100px;
				width: 98vw;
				top: -1000px;
				left: -5px;

				padding-left: 10px;
				background-color: red;
				text-align: center;
			}

			main div {
				background-color: white;
				text-align: center;
				border-radius: 25px;
				box-shadow: 5px 5px black;
			}

			#information {
				position: absolute;
				top: 60px;
				bottom: 45px;
				left: 25px;
				right: 800px;
			}

			#pictures {
				position: absolute;
				top: 60px;
				bottom: 45px;
				left: 500px;
				right: 25px;
			}

			#imageArea {
				margin-top: 100px;
				box-shadow: none;
			}

			h2 {
				font-size: 25px;
			}

			#side h2 {
				position: relative;
				top: 100px;
				color: white;
			}

			button {
				background-color: white;
				line-height: 50px;
				border-radius: 25px;
				font-weight: bolder;
				width: 200px;
				box-shadow: 5px 5px black;
				margin-top: 30px;
				position: relative;
				top: 200px;
				transition: 0.75s;
				transition-timing-function: ease-in-out;
			}

			button:hover {
				box-shadow: none;
				transition: 0.75s;
				transition-timing-function: ease-in-out;
			}

			#set1 {
				box-shadow: none;
				margin-top: 100px;
			}

			hr {
				margin-top: 100px;
				margin-bottom: 100px;
			}

			#set2 {
				box-shadow: none;
			}

			img {
				width: 300px;
				height: 300px;
				transition: 1s;
				transition-timing-function: ease-in-out;
			}

			p {
				font-weight: bold;
				font-size: 18px;
			}
		</style>
	</head>

	<body>
		<div id="side">
			<h2>Tell Me About Yourself...</h2>
			<button onclick="basicInfoHandler()">Basic Information</button>
			<button onclick="additionalInfoHandler()">Additional Information</button>
		</div>

		<main>
			<div id="information">
				<h2>Your Information</h2>
				<div id="set1">
					<p id="userName">&#128221; Name:</p>
					<p id="userAge">&#127874; Age:</p>
					<p id="userLocation">&#127757; Location:</p>
					<p id="userColour">&#127912; Favourite Colour:</p>
				</div>
				<hr />
				<div id="set2">
					<p id="userMusic">&#127928; Favourite Musician:</p>
					<p id="userAnimal">&#128059; Favourite Animal:</p>
					<p id="userBook">&#128214; Favourite Book:</p>
					<p id="userSport">&#9918; Favourite Sport:</p>
				</div>
			</div>

			<div id="pictures">
				<h2>My Favourite Things</h2>
				<div id="imageArea">
					<img
						src=""
						id="musicImage"
					/>

					<img
						src=""
						id="animalImage"
					/>

					<img
						src=""
						id="bookImage"
					/>

					<img
						src=""
						id="sportImage"
					/>
				</div>
			</div>
		</main>

		<header>
			<h1>Paisley - A Fancy Project Name</h1>
		</header>

		<footer>
			<h1>FOOTER</h1>
		</footer>

		<script>
			function basicInfoHandler() {
				var nameInput = prompt('Please Enter Your Name:');
				var ageInput = prompt('Please Enter Your Age:');
				var locationInput = prompt('Please Enter Your Location');
				var colourInput = prompt("What's Your Favourite Colour?");

				document.getElementById('userName').innerHTML =
					'&#128221; Name: ' + nameInput;

				document.getElementById('userAge').innerHTML =
					'&#127874; Age: ' + ageInput;

				document.getElementById('userLocation').innerHTML =
					'&#127757; Location: ' + locationInput;

				document.getElementById('userColour').innerHTML =
					'&#127912; Favourite Colour: ' + colourInput;
			}

			function additionalInfoHandler() {
				var musicInput = prompt("Who's Your Favourite Musician?");
				var animalInput = prompt("What's Your Favourite Animal?");
				var bookInput = prompt("What's Your Favourite Book?");
				var sportInput = prompt("What's Your Favourite Sport?");

				document.getElementById('userMusic').innerHTML =
					'&#127928; Favourite Musician: ' + musicInput;

				document.getElementById('userAnimal').innerHTML =
					'&#128059; Favourite Animal: ' + animalInput;

				document.getElementById('userBook').innerHTML =
					'&#128214; Favourite Book: ' + bookInput;

				document.getElementById('userSport').innerHTML =
					'&#9918; Favourite Sport: ' + sportInput;

				document.getElementById('musicImage').src =
					'https://faroutmagazine.co.uk/static/uploads/2020/06/This-is-how-George-Harrison-Bob-Dylan-Tom-Petty-Jeff-Lynne-and-Roy-Orbison-formed-the-Travelling-Wilburys.jpg';

				document.getElementById('animalImage').src =
					'https://www.norfolkwildlifetrust.org.uk/getmedia/9782390e-32ac-40ad-98a9-b712104bf2eb/Fox-Sitting,-Michael-Sankey,-Sweetbriar-Marshes,-28-September-2010-(Custom).JPG.aspx?width=762';

				document.getElementById('bookImage').src =
					'https://m.media-amazon.com/images/I/81M8-ALEFcL.jpg';

				document.getElementById('sportImage').src =
					'https://cdn.shopify.com/s/files/1/0254/2030/0362/products/36909-Rounders-_2.jpg';
			}
		</script>
	</body>
</html>

```
