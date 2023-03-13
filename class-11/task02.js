"use strict";
// Script for Adding Event Handler to Form

var formSubmit = document.getElementById("foodForm"); // Getting the Form Element By Its ID

formSubmit.addEventListener("submit", function(){
     event.preventDefault(); // Prevent Page from reloading on submit. 

     var getFoodName = event.target.foodName.value; // assiging variable for foodName
     var getFoodType = event.target.foodType.value; // assinging variable for foodType
     var getFoodQuantity = event.target.foodQuantity.value; // assigning variable for foodQuantity
     var getFoodImage = event.target.foodImage.value; // assinging variable for foodImage

     // Creating Class and Constructor for Form Information

     class foodFormConstructor {
        constructor(getFoodName, getFoodType, getFoodQuantity, getFoodImage) {
            this.name = getFoodName;
            this.type = getFoodType;
            this.quantity = getFoodQuantity;
            this.image = getFoodImage;
        }

        // Method to Add information from form to Table
        

     }
    
     const newFoodInformation = new foodFormConstructor(getFoodName, getFoodType, getFoodQuantity, getFoodImage);

     function addToTable() {

            // Declaring Variables 

            var tableFoodName = newFoodInformation.name;
            var tableFoodType = newFoodInformation.type;
            var tableFoodQuantity = newFoodInformation.quantity;
            var tableFoodImage = newFoodInformation.image;
            
            // Making New Table Row

            var createRow = document.createElement("tr");

            //Creating New Table Data Cells for Name, Type, and Quantity

            var foodNameCell = document.createElement("td");
            var foodTypeCell = document.createElement("td");
            var foodQuantityCell = document.createElement("td");
            var foodImageCell = document.createElement("td");


            // Adding Inner Text to Cells

            foodNameCell.innerText = tableFoodName;
            foodTypeCell.innerText = tableFoodType;
            foodQuantityCell.innerText = tableFoodQuantity;

            // Adding Inner Html to Image Table Cell.

            foodImageCell.innerHTML = "<img src= '" + tableFoodImage + "'/>";

            // Appending Table Cells to Table

            createRow.appendChild(foodNameCell);
            createRow.appendChild(foodTypeCell);
            createRow.appendChild(foodQuantityCell);
            createRow.appendChild(foodImageCell);

            // Appending New Table Row onto Table

            document.getElementById("foodDataTable").appendChild(createRow); 
            console.log(foodImageCell);
            
        }

        addToTable();
});