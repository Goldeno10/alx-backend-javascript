interface Teacher {
  readonly firsname: string;
  readonly lastname: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
} 

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher (firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}


interface studentInfo {
    firstName:string;
    lastName: string;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(studentInfo: studentInfo) {
        this.firstName = studentInfo.firstName;
        this.lastName = studentInfo.lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    };
    displayName(): string {
        return this.firstName;
    }
}