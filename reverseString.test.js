const reverseString = require("./reverseString");

test("reverseString function exist", () => {
  expect(reverseString.reverseString).toBeDefined();
});

test("String reverses", () => {
  // expect(reverseString('hello')).toEqual('olleh') // pass
  expect(reverseString.reverseString("hello")).toEqual("olleh"); // fail
});

test("String reverses into lowercase", () => {
  expect(reverseString.reverseStringInLowercase("Hello")).toEqual("olleh");
});
