# Lab 01 B

1️⃣  | create four prompts

2️⃣  | each prompt should ask your name, age, country and fav color respectively

3️⃣  | Create a LIST in your html

4️⃣  | This list should contain four list items with name, age, country and fav color

5️⃣  | the values you enter in your prompt should be rendered in the frontend and the text color should be the fav color you entered

```
<!DOCTYPE html>

<html>

<head>
    <title>Lab 01b</title>

    <style>
        body {
            background-image: linear-gradient(to right, purple, red);

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        h1 {
            font-size: 50px;
            text-shadow: 2px 2px white;
        }

        div {

            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        ul {
            background-color: white;
            border: 2px 2px 2px 2px black;
            border-radius: 25px;
            padding: 30px;
            font-weight: bold;
            font-size: x-large;



        }

        button {
            background-color: white;
            border: 2px black;
            padding: 10px;
            border-radius: 25px;
            font-weight: bold;

        }

        button:hover {
            box-shadow: 5px 5px black;
        }
    </style>

</head>

<body>

    <h1>About You</h1>

    <div>
        <ul id="infoList">
            <li id="name">Name</li>
            <li id="age">Age</li>
            <li id="country">Country</li>
            <li id="colour">Favourite Colour</li>
        </ul>

        <button onclick="clickHandler()">Please Click Here to Enter your Information</button>
    </div>


    <script>

        function clickHandler() {
            var userName = prompt("Please Enter your Name");
            var userAge = prompt("Please Enter your Age");
            var userCountry = prompt("Please Enter your Country");
            var userColour = prompt("What is your Favourite Colour?");

            document.getElementById("name").innerHTML = "Name: " + userName;
            document.getElementById("age").innerHTML = "Age: " + userAge;
            document.getElementById("country").innerHTML = "Country: " + userCountry;
            document.getElementById("infoList").style.color = userColour;
            document.getElementById("colour").innerHTML = "Favourite Colour: " + userColour;

        }

    </script>

</body>

</html>

```
