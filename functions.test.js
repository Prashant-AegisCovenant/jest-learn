const functions = require("./functions");

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

// // beforeEach(() => initDatabase())
// // afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User if Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
  
  test("User if Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined is the opposite of toBeUndefined
// toBeTruthy matches anythiing that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy(); // pass
  // expect(functions.checkValue(0)).toBeFalsy();         // pass
  // expect(functions.checkValue(undefined)).toBeFalsy(); // pass
  // expect(functions.checkValue(2)).toBeFalsy();         // fail
});

test("Should be truthy", () => {
  expect(functions.checkValue(1)).toBeTruthy(); // pass
  // expect(functions.checkValue(undefined)).toBeTruthy();// fail
  // expect(functions.checkValue(0)).toBeTruthy();        // fail
  // expect(functions.checkValue(null)).toBeTruthy();     // fail
});

// to compare objects
test("User should be John Doe object", () => {
  // expect(functions.createUser()).toBe({
  //     firstName: 'John',
  //     lastName: 'Doe'
  // })
  // fails as even though the value of these objects are same, the toBe matcher matches primitive types and object is a user defined type
  expect(functions.createUser()).toStrictEqual({
    firstName: "John",
    lastName: "Doe",
  });
});

// testing response from a get request
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toStrictEqual("Leanne Graham"); // pass
    // expect(data.name).toEqual('Leanne Graham')       // also passes
  });
});

test("User fetched name should be Leanne Graham with async await", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toStrictEqual("Leanne Graham"); // pass
});
