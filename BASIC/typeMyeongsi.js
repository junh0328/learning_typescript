"use strict";
var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'JavaScript';
var courseCompleted = false;
var student1 = {
    studentID: 123454321,
    studentName: 'Janet Lee',
    age: 30,
    gender: 'male',
    subject: 'Mongo DB',
    courseCompleted: false,
};
// 인터페이스를 통해 복잡해질 수 있는 코드의 반환타입을 위에서 선언하고, Student 키워드만 가져와 사용한다
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: 'Jenny Kim',
        gender: 'female',
        subject: 'JavaScript',
        courseCompleted: true,
    };
}
function saveStudentDetails(student) {
    student.studentID = 12131414; // Student 인터페이스에서 readonly로 작성했기 때문에 studentID 의 값을 바꿀 수 없다는 오류 출력
}
saveStudentDetails(student1);
