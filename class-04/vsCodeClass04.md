# V's Code Class 04

## Getter and Setter Functions


```
<!DOCTYPE html>
<html>
  <head>
    
  </head>

  <body>

    <div>

      <button onclick="getTheCity()">GET THE CITY</button>

      <button onclick="setTheCity()">SET THE CITY</button>
     
    </div>


    <script>

      var city = "Norwich";

      function getTheCity(){
         console.log(city);
      }

      function setTheCity(){
        city = prompt('Enter the city');
        //console.log(city);
      }
           
    </script>
    
  </body>
</html>
```

## Data Types

```
<!DOCTYPE html>
<html>
  <head>
    
  </head>

  <body>


    <script>

      // console.log('hurray')

      // var something = true;

      // console.log(something)

      // console.log(typeof(something))

      function ohYeah(){
        
      }


      // Numeric -> 1, 2.3
      // String -> " sdjhgfkjhds ", ' kjhdgsfjkhdsgvfh '
      // Boolean -> true or false
      // OBJECT -> [],{}
      // function data type


      var paisley = 1.2

      console.log(typeof(paisley));


      var jez = 1.2e2// 1.2 * 10^2 => 120

      console.log(jez);

      var jane = true;

      console.log(typeof(jane));

      var george = function rugby(){console.log('rugby')}

      console.log(george);
      
      var carla = document;

      console.log(typeof(carla));


      var arrayu = []

      console.log(typeof(arrayu));

      var obj = {};

      console.log(typeof(obj));
      
    </script>
    
  </body>
</html>

```

## Naming Conventions

```<!DOCTYPE html>
<html>
  <head>
    
  </head>

  <body>

    <button onclick="getSecretNumber()">Get Secret Number</button>

    <button onclick="setSeretNumber()">Set Secret Number</button>

    <script>

      var secretNumber = 20;
      
      function getSecretNumber(){// gets the secret number
        console.log(secretNumber)
      }

      function setSeretNumber(){// you are setting the secret number
        secretNumber = prompt("set the secret number");
      }
      
    </script>
    
  </body>
</html>

```

