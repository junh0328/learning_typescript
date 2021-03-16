'use strict';
var sendGreeting = function (message, userName) {
  if (message === void 0) {
    message = 'Hello';
  }
  if (userName === void 0) {
    userName = 'there';
  }
  console.log(message + ', ' + userName);
};
sendGreeting();
sendGreeting('Good moring');
sendGreeting('Good afternoon', 'Jenny');
