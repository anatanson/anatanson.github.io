

var selectNumber = [3465, 69704, 482, 486, 9283, 7594];
var pickANumber = function () {
var todaysNumber = selectNumber[Math.floor(Math.random() * selectNumber.length)];
return todaysNumber;
};

var selectStreet = ['4th Avenue,', 'Melrose Avenue,', 'Main Street,', '16th Street,', 'Warren Street,', 'Perlita Ave,'];
var pickAStreet = function () {
var todaysStreet = selectStreet[Math.floor(Math.random() * 6)];
return todaysStreet;
};

var selectCity = ['New York', 'San Francisco', 'Los Angeles', 'Jackson', 'Chicago', 'Barcelona'];
var pickACity = function () {
var todaysCity = selectCity[Math.floor(Math.random() * 6)];
return todaysCity;
};

var selectState = ['CA,', 'NY,', 'IL,', 'ID,', 'FL,', 'GA',];
var pickAState = function () {
var todaysState = selectState[Math.floor(Math.random() * 6)];
return todaysState;
};

var selectZip = [57743, 90056, 98762, 12468, 78565, 69305];
var pickAZip = function () {
var todaysZip = selectZip[Math.floor(Math.random() * 6)];
return todaysZip;
};



console.log(pickANumber()+ " " + pickAStreet() + " " + pickACity() + " " + pickAState() + " " + pickAZip());
