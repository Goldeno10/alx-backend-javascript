var studentOne = {
    firstname: 'Muhammad',
    lastname: 'Gold',
    age: 25,
    location: 'Nigeria'
};
var studentTwo = {
    firstname: 'Ibrahim',
    lastname: 'Genius',
    age: 23,
    location: 'Kaduna'
};
var studentsList = [studentOne, studentTwo];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstname;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
