interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  workDirectorTasks(): string {
      return 'Getting to director tasks';
  }
  getCoffeeBreak(): string {
      return 'Geing cofee break';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break'
  }
  workTeacherTasks() {
    return 'Getting to work'
  }
}

function  createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return   new Teacher();
  }
  else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher) {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  }
  else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}

type Subject = 'Math' | 'History';

function techClass(todayClass: Subject): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  else if  (todayClass === 'History') {
    return 'Teaching History';
  }
}
