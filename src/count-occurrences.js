"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 * 
 * @param {string[]} y - array of strings to check
 * @param {string} n - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function x(y, n) {
        let x2 = 0;
      
        for (let mars of y) {
          if (mars === n) {
            x2++;
          }
        }
      
        return x2;
      }
      
      console.log(x(["na", "na", "na", "na", "BATMAN"], "na"));    // Output: 4
      console.log(x(["na", "na", "na", "na", "BATMAN"], "BATMAN")); // Output: 1
      console.log(x(["na", "na", "na", "na", "BATMAN"], "batman")); // Output: 0
      console.log(x(["na", "na", "na", "na", "BATMAN"], "a"));      // Output: 0
      