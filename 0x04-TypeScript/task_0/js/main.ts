interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
} 

const studentOne: Student = {
  firstname: 'Muhammad',
  lastname: 'Gold',
  age: 25,
  location: 'Nigeria'
};
const studentTwo: Student = {
  firstname:'Ibrahim',
  lastname: 'Genius',
  age: 23,
  location: 'Kaduna',
};
const studentsList = [studentOne, studentTwo];

let table = document.createElement('table');
let tableBody = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstname;
  row.appendChild(firstNameCell);
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  tableBody.appendChild(row);

  }
)
