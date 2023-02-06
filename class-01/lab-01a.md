# Lab 1a Task


1️⃣  | Create a basic html code
2️⃣  | Add basic css styling
3️⃣  | Add a Js script to it
4️⃣  | JS files should contain console.log, prompt and an alert

## Version One

```

<!DOCTYPE html>

<html>

<head>
    <title>201 Class 1</title>

    <style>
        header {
            background-color: red;
            color: white;
            text-align: center;
            font-size: x-large;
            font-weight: 900;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding-bottom: 10px;
            display: flex;
            justify-content: center;

        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;

        }

        button {
            background-color: red;
            color: white;
            width: 25%;
            height: 25px;
            border-radius: 50px;
            border: none;
        }
    </style>

    <script>
        function buttonHandler() {
            var username = prompt("Please Type your Username");

            if (username == "user1") {
                var password = prompt("Please enter your password");

                if (password == "password1") {
                    document.getElementById("header2").innerHTML = "Welcome Back";
                    alert("welcome Back");
                    console.log("user logged in.")
                } else {
                    alert("Please Try Again");
                }
            } else {
                alert("Username not found - please try again.");
            }
        }

    </script>

</head>

<body>

    <header>
        <h1>Log In Page</h1>
    </header>

    <main>
        <h2 id="header2">Please use the button below to log in:</h2>

        <button onclick="buttonHandler()">Click Here to Log In</button>
    </main>

</body>

</html>

```
