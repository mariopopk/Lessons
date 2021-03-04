class History {
  static logins = [];
}

class Login {
  constructor(username, wasLogInSuccesful) {
    this.id = History.logins.length + 1;
    this.username = username;
    this.wasLogInSuccesful = wasLogInSuccesful;
    this.time = createTimeStamp();
  }
}

function createTimeStamp() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month}/${day}/${year} ${hours}:${minutes}`;
}

let user = "jhewitson";
const password = "javascript";

History.logins.push(new Login("mariopopk", false));
History.logins.push(new Login("mariopopk", false));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Welcome back, ${user}. Please type in your password: \n`,
  (input) => {
    // Write code below ////////////////////////////////////
    const isSuccessful = input === password;
    History.logins.push(new Login(user, isSuccessful));
    // Write code above ////////////////////////////////////
    const lastRecord = History.logins.length - 1;
    console.log(History.logins[lastRecord]);
    readline.close();
  }
);
