# V's Code Class 11

## Forms in HTML

```html
<!-- Forms in html -->
<!DOCTYPE html>
<html>
	<head>
		<title>Forms</title>
		<style>
			input {
				box-shadow: 2px 2px #a69986;
				border: none;
				margin-bottom: 14px;
				padding: 4px;
				border-bottom-right-radius: 20px;
				background-color: antiquewhite;
				color: #594e3d;
				font-weight: bolder;
			}
			input[type='submit'] {
				background-color: bisque;
				padding: 6px;
				font-family: monospace;
				border-radius: 2%;
			}
			#main {
				display: flex;
				flex-direction: row;
				box-shadow: 2px 2px white;
				border: 1px solid white;
				color: #207e70;
			}
			#left {
				border-right: 1px solid white;
			}
			#right {
				paddding: 4px;
			}
			h1 {
				font-size: 72px;
				background: -webkit-linear-gradient(bisque, antiquewhite);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				text-shadow: 2px 2px #207e70;
			}
			body {
				margin: 0px;
				background-color: #53b1a3;
				color: burlywood;
			}
		</style>
	</head>
	<body>
		<h1>Forms</h1>

		<div id="main">
			<div id="left">
				<form style="padding: 10px">
					<label for="name">Name:</label><br />
					<input
						type="text"
						id="name"
						placeholder="Enter your name"
						required
					/><br />
					<label for="email">Email:</label><br />
					<input
						type="email"
						id="email"
						placeholder="Enter your email"
						required
					/><br />
					<label for="password">Password:</label><br />
					<input
						type="password"
						id="password"
						placeholder="Enter your pwd"
						required
					/>
					<br />

					<input
						type="submit"
						value="submit the form"
					/>
				</form>
			</div>
			<div id="right">
				<h2>Enter the details</h2>
				<ol>
					<li>Enter the Name</li>
					<li>Enter the Email</li>
					<li>Enter the Pwd</li>
				</ol>
			</div>
		</div>
	</body>
</html>
```

## Getting the Values from a Form Using JavaScript

```html
<!-- Forms in html -->
<!DOCTYPE html>
<html>
	<head>
		<title>Forms</title>
		<style>
			input {
				box-shadow: 2px 2px #a69986;
				border: none;
				margin-bottom: 14px;
				padding: 4px;
				border-bottom-right-radius: 20px;
				background-color: antiquewhite;
				color: #594e3d;
				font-weight: bolder;
			}
			input[type='submit'] {
				background-color: bisque;
				padding: 6px;
				font-family: monospace;
				border-radius: 2%;
			}
			#main {
				display: flex;
				flex-direction: row;
				box-shadow: 2px 2px white;
				border: 1px solid white;
				color: #207e70;
			}
			#left {
				border-right: 1px solid white;
			}
			#right {
				paddding: 4px;
			}
			h1 {
				font-size: 72px;
				background: -webkit-linear-gradient(bisque, antiquewhite);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				text-shadow: 2px 2px #207e70;
			}
			body {
				margin: 0px;
				background-color: #53b1a3;
				color: burlywood;
			}
		</style>
	</head>
	<body>
		<h1>Forms</h1>

		<div id="main">
			<div id="left">
				<form
					style="padding: 10px"
					onsubmit="formHandler()"
				>
					<label for="name">Name:</label><br />
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter your name"
						required
					/><br />
					<label for="email">Email:</label><br />
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
						required
					/><br />
					<label for="password">Password:</label><br />
					<input
						type="password"
						id="password"
						name="pwd"
						placeholder="Enter your pwd"
						required
					/>
					<br />

					<input
						type="submit"
						value="submit the form"
					/>
				</form>
			</div>
			<div id="right">
				<h2>Enter the details</h2>
				<ol>
					<li>Enter the Name</li>
					<li>Enter the Email</li>
					<li>Enter the Pwd</li>
				</ol>
			</div>
		</div>
		<script>
			// when the form is submitted
			// the eventHandler which is
			// formHandler triggers
			function formHandler() {
				event.preventDefault(); // this will make sure that the page doesnt reload when thr form is submitted
				// console.log(event);
				// console.log("------------");
				// console.log(event.target);
				// console.log("------------");
				// console.log(event.target.name);
				// console.log(event.target.email);
				// console.log(event.target.pwd);
				// console.log("-------------");
				console.log(event.target.name.value);
				console.log(event.target.email.value);
				console.log(event.target.pwd.value);
			}
		</script>
	</body>
</html>
```
