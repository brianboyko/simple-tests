const request = require("request");
/**
 * This is an intro exam for programming.
 * Fill in the questions in order. Don't worry about
 * the most efficient algorithm or the coolest code,
 * just make the tests pass, and if you have time, go
 * back to improve and optimize.
 *
 * The first test, "add", is completed for you.
 *
 * To run the test suite, type "npm run test" in the
 * console.
 */

/**
 * This function should add two parameters together.
 * @function add
 * @param  {number} a
 * @param  {number} b
 * @returns the sum of a & b;
 */

export const add = function (a, b) {
  return a + b;
}


/**
 * This function should add two numbers together twice.
 * @example - addDouble(1, 2) should be (6);
 * @function addDouble
 * @param  {[type]}  a [description]
 * @param  {[type]}  b [description]
 */
export const addDouble = function (a, b) {
  return null;
}

/**
 * This function should return true if the input
 * is a palindrome, false if it is not
 * @example - isPalindrome("racecar") === true
 * @example - isPalindrome("ferrari") === false
 * @function isPalindrome
 * @param {string} word
 * @returns {boolean} whether the word is a palindrome
 */

export const isPalindrome = function (word) {
  return null;
}

/**
 * This function should take an array of integers, (input)
 * and return an array containing the same integers, ordered
 * by frequency in the input.
 * @example - frequencySort([1, 3, 1, 8, 1, 3, 2, 1, 3, 8]) === [1, 3, 8, 2]
 * @example - frequencySort([3, 7148, 7148]) === [7148, 3]
 * @function frequencySort
 * @param {array} input
 * @returns {array} - the output array
 */

export const frequencySort = function(input){
  let store = {}
  input.forEach((n) => store[n] ? store[n] += 1 : store[n] = 1)
  return [];
}

/**
 * This function uses the "request" NPM module.
 * It should create a GET request to:
 *   https://jsonplaceholder.typicode.com/posts
 * When the request resolves, you should call the "callback" function
 * with the number of records which have the substring in the title.
 * @function countTitlesWith
 * @param {string} substring - the string to search for.
 * @param {function} callback - a callback function to use in testing.
 */


export const countTitlesWith = function(substring, callback) {
  request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
  }, function(error, response, body) {
    if (error) throw new Error(error);
    callback("This should be the number of records " +
      " with the substring in the title field")
  });
}
