let studentID: number = 12345;
let studentName: string = 'Jenny Kim';
let age: number = 21;
let gender: string = 'female';
let subject: string = 'JavaScript';
let courseCompleted: boolean = false;

let student1 = {
  studentID: 123454321,
  studentName: 'Janet Lee',
  age: 30,
  gender: 'male',
  subject: 'Mongo DB',
  courseCompleted: false
}

interface Student {
  studentID: number;
  studentName: string;
  age?: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
  // addComment? (comment: string): string;
  addComment?: (comment:string) => string;
}
// 인터페이스를 통해 복잡해질 수 있는 코드의 반환타입을 위에서 선언하고, Student 키워드만 가져와 사용한다

function getStudentDetails(studentID: number):Student 
{
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    gender: 'female',
    subject: 'JavaScript',
    courseCompleted: true
  };
}

function saveStudentDetails(student: Student): void{
  student.studentID = 12131414; // Student 인터페이스에서 readonly로 작성했기 때문에 studentID 의 값을 바꿀 수 없다는 오류 출력
}

saveStudentDetails(student1);