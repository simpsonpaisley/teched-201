# V's Code - Class 10

## The Bad Way...

```html

<!DOCTYPE html>
<html>
  <head>
    <title>Cars by pixel</title>
  </head>
  <body>
    <h1>CARS</h1>

    <button onclick="carsAttributes()">Enter the car details</button>

    <script>
      // Function when the button is clicked
      function carsAttributes() {
        var georgeCarColor = prompt("enter car color");
        var georgeCarBrand = prompt("Enter car brand");
        var georgeCarCost = prompt("Enter the price");

        // GEORGE
        var georgeCarObject = {};

        // Properties
        georgeCarObject.color = georgeCarColor;
        georgeCarObject.brand = georgeCarBrand;
        georgeCarObject.cost = georgeCarCost;

        // Methods
        georgeCarObject.run = function () {
          return "accelerator is pressed";
        };

        georgeCarObject.stop = function () {
          return "brake is pressed";
        };

        georgeCarObject.change = function () {
          return "clutch is pressed";
        };

        georgeCarObject.buy = function () {
          return "I bought the car for " + this.cost;
        };

        // "this" referes to the object itself --> georgeCarObject
        // "this" should be inside a method(always)

        console.log(georgeCarObject.buy());

        // JANE
        var janeCarColor = prompt("enter car color");
        var janeCarBrand = prompt("Enter car brand");
        var janeCarCost = prompt("Enter the price");
        var janeCarObject = {};

        // Properties
        janeCarObject.color = janeCarColor;
        janeCarObject.brand = janeCarBrand;
        janeCarObject.cost = janeCarCost;

        // Methods
        janeCarObject.run = function () {
          return "accelerator is pressed";
        };

        janeCarObject.stop = function () {
          return "brake is pressed";
        };

        janeCarObject.change = function () {
          return "clutch is pressed";
        };

        janeCarObject.buy = function () {
          return "I bought the car for " + this.cost;
        };

        // "this" referes to the object itself --> janeCarObject
        // "this" should be inside a method(always)

        console.log(janeCarObject.buy());

        // CARLA
        var carlaCarObject = {};

        // Properties
        carlaCarObject.color = carColor;
        carlaCarObject.brand = carBrand;
        carlaCarObject.cost = carCost;

        // Methods
        carlaCarObject.run = function () {
          return "accelerator is pressed";
        };

        carlaCarObject.stop = function () {
          return "brake is pressed";
        };

        carlaCarObject.change = function () {
          return "clutch is pressed";
        };
... (74 lines left)

```

---
