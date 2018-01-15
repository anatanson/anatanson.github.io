//first line of song
function bottle99(){
  var node = document.createElement("li");
  var bottleHundred = 99
  var textnode = document.createTextNode(bottleHundred + " bottles of beer on the wall, " + bottleHundred + " bottles of beer. ");         // Create a text node
  node.appendChild(textnode);
  document.getElementById("99bottles-lyrics").appendChild(node);
};
window.onload = bottle99();

//bottles 2-98
function bottle98(){
    for (var bottles = 98; bottles > 1; bottles -- ) {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
    node.appendChild(textnode);
    var newNode = document.createElement("li");
    var textnode = document.createTextNode(" " + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ");
    document.getElementById("99bottles-lyrics").appendChild(node);
    document.getElementById("99bottles-lyrics").appendChild(newNode);
    newNode.appendChild(textnode);
};
}
window.onload = bottle98();

//last bottle
function bottle1(){
  var node = document.createElement("li");
  var bottle1 = 1
  var textnode = document.createTextNode("Take one down and pass it around, " + bottle1 + " bottle of beer on the wall. ");
  node.appendChild(textnode);
  var newNode = document.createElement("li");
  var textnode = document.createTextNode(" " + bottle1 + " bottle of beer on the wall, " + bottle1 + " bottle of beer. ");
  document.getElementById("99bottles-lyrics").appendChild(node);
  document.getElementById("99bottles-lyrics").appendChild(newNode);
  newNode.appendChild(textnode);
};
window.onload = bottle1();

//last four lines of song no bottle var
function bottleNone(){
  var node = document.createElement("li");
  var textnode = document.createTextNode("Take one down and pass it around, no more bottles of beer on the wall.");
  document.getElementById("99bottles-lyrics").appendChild(node)
  node.appendChild(textnode);
  var newNode = document.createElement("li");
  var textnode = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer.");
  document.getElementById("99bottles-lyrics").appendChild(newNode)
  newNode.appendChild(textnode);
  var newestNode = document.createElement("li");
  var textnode = document.createTextNode("Go to the store and buy some more, 99 bottles of beer on the wall.");
  document.getElementById("99bottles-lyrics").appendChild(newestNode)
  newestNode.appendChild(textnode);
}
window.onload = bottleNone();


//ALL OF MY NOTES AND ATTEMPTS BELOW with tests and old 99 bottle code for console log


//CORRECT ISH BELOW
/*
function bottle98(){
    for (var bottles = 98; bottles > 1; bottles -- ) {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
    node.appendChild(textnode);
    //var node = document.createElement("li");
    //var newNode = textnode.cloneNode(true);
    var textnode = document.createTextNode(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ");
    document.getElementById("fav-list").appendChild(node);
    node.appendChild(textnode);
};
}
*/
//END CORRECTISH

/*
function bottle98(){
  var node = document.createElement("li");                 // Create a <li> node
 //var input = document.getElementById("new-thing").value;
 //var textnode = document.getElementById("new-thing").value;
 //var bottles = 99
 for (var bottles = 98; bottles > 1; bottles-- ) {
  var textnode = document.createTextNode("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");         // Create a text node

}
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("fav-list").appendChild(node);
};

window.onload=bottle98();
/*

var bottleHundred = 99
console.log (bottleHundred + " bottles of beer on the wall, " + bottleHundred + " bottles of beer. ");

for (var bottles = 98; bottles > 1; bottles -- ) {

  console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
  console.log (bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ");

}



/*
var bottleHundred = 99
console.log (bottleHundred + " bottles of beer on the wall, " + bottleHundred + " bottles of beer. ");

for (var bottles = 98; bottles > 1; bottles -- ) {

  console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
  console.log (bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ");

}

var bottle = 1
console.log ("Take one down and pass it around, " + bottle + " bottle of beer on the wall. ");
console.log(bottle + " bottle of beer on the wall, " + bottle + " bottle of beer.")
console.log("Take one down and pass it around, no more bottles of beer on the wall.");
console.log("No more bottles of beer on the wall, no more bottles of beer.")
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
var bottle = 1
console.log (bottle + " bottle of beer on the wall.");


window.onload = function() {

  var bottle = document.getElementById('fav-thing');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');
  var bottleHundred = 99
  console.log (bottleHundred + " bottles of beer on the wall, " + bottleHundred + " bottles of beer. ");

  for (var bottles = 98; bottles > 1; bottles -- ) {

    console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
    console.log (bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ");

  }
};



function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function(addToList) {

//  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    addToList(thingList, newThing);

    // bonus version -- instead of line 28:

    // if (newThing === "") {
    //   alert("You must type in a value!");
    // } else {
    //   addToList(thingList, newThing);
    //   newThingInput.value = "";
    // }

    newThingInput.value = "";
  };
};
*/
