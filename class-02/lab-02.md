# Lab 02

1️⃣  | Paste your yesterdays code into your replit or vscode

2️⃣  | Create a click event handler and listener

3️⃣  | Now, when the click event happens we need to get four prompts --> education, favorite programming language, future dream role , holiday destination

4️⃣  | Now, when someone enters the favorite language of their own choice they needs to get an alert saying hey you have selected the favorite language....

5️⃣  | After all the prompts are done render that to the frontend.


## Version One

```
<!DOCTYPE html>

<html>

<head>
    <title>Lab 2</title>

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
            font-size: 60px;
            text-shadow: 1px 3px white;
        }


        #cardSpace {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

        }

        #CardButton {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

        }

        .card {
            background-color: white;
            border: 2px 2px 2px 2px black;
            border-radius: 25px;
            padding: 20px;
            font-weight: bold;
            font-size: x-large;
            margin: 30px;
            width: 500px;
        }


        button {
            background-color: white;
            border: 2px black;
            padding-top: 10px;
            padding-bottom: 10px;

            border-radius: 25px;
            font-weight: bold;
            margin-top: 30px;
            font-size: large;
            width: 250px;
            margin-left: 170px;


        }

        button:hover {
            box-shadow: 5px 5px black;

        }
    </style>

</head>

<body>

    <h1>About You</h1>

    <div>
        <div id="cardSpace">

            <div class="CardButton">

                <div class="card">

                    <h2>Basic Information</h2>

                    <ul id="infoList">

                        <li id="name">Name:</li>
                        <li id="age">Age:</li>
                        <li id="country">Country:</li>
                        <li id="colour">Favourite Colour:</li>

                    </ul>
                </div>


                <button onclick="clickHandler()">Enter your Information</button>

            </div>

            <div class="CardButton">

                <div class="card">

                    <h2>Additional Information</h2>

                    <ul id="addInfoList">

                        <li id="edu">Education Level:</li>
                        <li id="progLang">Favourite Programming Language:</li>
                        <li id="job">Dream Job:</li>
                        <li id="holiday">Favourite Holiday Destination:</li>

                    </ul>
                </div>

                <button onclick="moreInfoHandler()">Enter More Information</button>

            </div>


        </div>







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

        function moreInfoHandler() {

            var education = prompt("What is your Education Level");
            if (education == "A-Level" || education == "a-level" || education == "a level" || education == "a levels") {
                alert("Me too!");
            }


            var favProgLang = prompt("What is your Favourite Programming Language?");
            if (favProgLang == "JavaScript" || favProgLang == "javascript" || favProgLang == "js") {
                alert(favProgLang + " - That's mine too.");
            }

            var dreamJob = prompt("What is your Dream Job?");
            if (dreamJob == "Food Critic" || dreamJob == "food critic" || dreamJob == "restautant reviewer") {
                alert("Snap!");
            }


            var holidayDest = prompt("What is your Favourite Holiday Destination?");
            if (holidayDest == "Benidorm" || holidayDest == "benidorm" || holidayDest == "spain" || holidayDest == "Spain") {
                alert(holidayDest + "'s my favorourite too!");
            }



            document.getElementById("edu").innerHTML = "Education Level: " + education;
            document.getElementById("progLang").innerHTML = "Favourite Programming Language: " + favProgLang;
            document.getElementById("job").innerHTML = "Dream Job: " + dreamJob;
            document.getElementById("holiday").innerHTML = "Favourite Holiday Destination: " + holidayDest;



        }

    </script>

</body>

</html>
```
