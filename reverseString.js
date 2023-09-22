const reverseString = (str) => str.split("").reverse().join("");

const reverseStringInLowercase = (str) => str.toLowerCase().split("").reverse().join("");

module.exports = {
    reverseString,
    reverseStringInLowercase
}