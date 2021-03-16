const sendGreeting = (message = 'Hello', userName = 'there'): void => {
  console.log(`${message}, ${userName}`);
};

sendGreeting();
sendGreeting('Good moring');
sendGreeting('Good afternoon', 'Jenny');
