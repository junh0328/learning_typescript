"use strict";
var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'JavaScript';
var courseCompleted = false;
function getStudentDetails(studentID) {
    return null;
}
// 함수가 아무것도 반환하지 않으면 함수의 반환 타입으로 void를 지정해준다.
// getStudentDetails() 함수를 통해 우리는 객체 형식으로 반환을 하려고 :object라는 타입을 선언했다.
// 하지만 오류가 발생한다. void 또는 any를 사용하라는 오류이다.
// 이를 해결하기 위해서는 return 문에 null을 넣어준다.
