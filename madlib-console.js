


//var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
//var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

//var random1 = Math.floor((Math.random() * startupX.length));
//var random2 = Math.floor((Math.random() * startupY.length));


//my code

function changeStartup() {
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);



}

document.getElementById('create').onclick = changeStartup;
/*
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));


function changeStartup() {


  document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
return('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
  //console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

}

document.getElementById('create').onclick = function(changeStartup);


document.getElementById('create').onclick = function() {
document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

  // console.log('<h1>'+'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]+'<h/1>');
//document.write('<h1>'+'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]+'</h1>');
    // return('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


/*
document.getElementById('create').onclick = function() {
document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}
*/



/*
var favoriteArray = [];
    document.getElementById('xForY').innerHTML = favoriteArray;

    function changeStartup() {
        favoriteArray.push();

    }

document.getElementById('save').onclick = favoriteArray;

document.getElementById('print').onclick = favoriteArray

function showStartup() {
  var favoriteArray
  document.getElementById('xForY').innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);



}

document.getElementById('favorites').innerHTML = saveArray;
*/


  //  }








//instructions code
