   function createAnimalHandler() {

            var animalHead = prompt("What Animal Head do you Want?");
            var animalBody = prompt("What Animal Body Do You Want?");
            var animalLegs = prompt("What Animal Legs Do You Want?");
            var animalTail = prompt("What Animal Tail Do You Want?");
            var animalName = prompt("What Do You Want To Call Your Animal?");

            class animalConstructor {
                constructor(animalHead, animalBody, animalLegs, animalTail, animalName) {

                    this.head = animalHead;
                    this.body = animalBody;
                    this.legs = animalLegs;
                    this.tail = animalTail;
                    this.name = animalName;
                }

                displayAnimal() {

                    //document.getElementById("animalDisplay").innerText = "Your Animal has the HEAD of a " + animalHead + ". The BODY of a " + animalBody + ". The LEGS of a " + animalLegs + ". The TAIL of a " + animalTail + ". And the NAME of your animal is " + animalName;
                    return ("Your Animal has the HEAD of a " + this.head + ". The BODY of a " + this.body + ". The LEGS of a " + this.legs + ". The TAIL of a " + this.tail + ". And the NAME of your animal is " + this.name);
                }
            }


            const newAnimal = new animalConstructor(animalHead, animalBody, animalLegs, animalTail, animalName);
            // document.getElementById("displayAnimal").innerText = "Your Animal has the HEAD of a " + animalConstructor.animalHead + ". The BODY of a " + animalConstructor.animalBody + ". The LEGS of a " + animalConstructor.animalLegs + ". The TAIL of a " + animalConstructor.animalTail + ". And the NAME of your animal is " + animalConstructor.animalName;

            console.log(newAnimal.displayAnimal());
            console.table(newAnimal);
            document.getElementById("animalHeadDisplay").innerText = "Your Animal has the HEAD of a " + newAnimal.head;
            document.getElementById("animalBodyDisplay").innerText = "Your Animal has the BODY of a " + newAnimal.body;
            document.getElementById("animalLegsDisplay").innerText = "Your Animal has the LEGS of a " + newAnimal.legs;
            document.getElementById("animalTailDisplay").innerText = "Your Animal has the TAIL of a " + newAnimal.tail;
            document.getElementById("animalNameDisplay").innerText = "The NAME of Your Animal is " + newAnimal.name;
        }