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
