namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
     }
      export class Java {
        getRequirements(): string {
          return  'Here is the list of requirements for Java';
        }
        getAvailableTeacher (teacher: Teacher): string {
          if (teacher.experienceTeachingReact) {
            return `Available Teacher: ${teacher.firstName}`;
          } else {
            return 'No available teacher';
          }
        }
      }
  }