namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number
  }
  export class Cpp {
    getRequirements(): string {
      return  'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher (teacher: Teacher): string {
      if (teacher.experienceTeachingC) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

}