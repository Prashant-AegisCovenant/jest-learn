const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2, // passes
//   add: (num1, num2) => num1 + num2 + 1    // fails as output does not matches the one expected by the test matcher
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "John",
    };
    user["lastName"] = "Doe";
    return user;
  },

  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.data)
      .catch((err) => console.log("error: ", err)),
};

module.exports = functions;
