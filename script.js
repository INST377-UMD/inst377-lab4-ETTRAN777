function alertMe(){
    event.preventDefault();
    const name = document.getElementById("nameField");
    alert("Hello "+name.value+"!");
}

function changeColor() {
    const head = document.getElementById("heading");
    let body = document.getElementById("body");  // Use the ID as a string
    const pink = "rgb(255, 215, 236)";
    const purple = "rgb(98, 64, 109)";

    // Change the background color
    if (body.style.backgroundColor == pink) {
        body.style.backgroundColor = purple;
        head.style.color = "rgb(255, 255, 255)";
    } else {
        body.style.backgroundColor = pink;
        head.style.color = "rgb(0, 0, 0)";
    }
}

function validateText(){
    event.preventDefault();
    var badChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', 
        '[', ']', '{', '}', ';', "'", ':', '"', '\\', '|', ',', '.', '<', '>', '/', '?'];
    let input = document.getElementById("textValidField").value;
        for (var i = 0; i < badChars.length; i++) {
            if (input.includes(badChars[i])) {
                alert("Invalid: contains special characters");
                return false; 
            }
        }
        alert("Valid Text");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the page from reloading
      alert("Form submitted successfully!");
    });
  });

count = 0; //declare outside so it doesnt get reset
function addText(){
    //Too much text being added looks dumb so i added a limit
    const head = document.getElementById("heading");
    if(count<5){
        head.innerHTML = head.innerHTML + " - Adding Text"; 
        count++; 
    }else if (count==5){
        head.innerHTML = head.innerHTML + " - Limit Reached"; 
        count++; //So that the count is no longer = to 5
    }
}

function resetHeader(){
    //Too much text being added looks dumb so i added a limit
    const head = document.getElementById("heading");
        head.innerHTML = "INST377 - Lab 4";
        count = 0;
}
