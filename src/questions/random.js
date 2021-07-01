/**
 * === TEST ===
 * How would you write the same but with an es6 template literal?
 */
const getString = (name) => {
  return "My name is" + " " + name;
};

/**
 * === TEST ===
 * Question: What's the difference between const and let?
 */

/**
 * === TEST ===
 * What is the output difference between these 2 functions?
 */
const getSomeValue = () => {
  return {};
};

const getSomeOtherValue = () => ({});

/**
 * === TEST ===
 * What's the output of this function if I call it like `multiply(6)`?
 */
function multiply(a, b = 2) {
  return a * b;
}

/**
 * === TEST ===
 * When adding an item to an array, what's the difference between the 2 solutions below (a and c):
 */
const a = [1, 2, 3];
a.push(4);

const b = [1, 2, 3];
const c = [...b, 4];

/**
 * === TEST ===
 * How would you create an object with the properties of both obj1 and obj2 (merge them together)
 */
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 2, c: 3, d: 4 };
const obj3 = "merge obj1 and obj2 together";

/**
 * === TEST ===
 * Iterate over each property on obj3 and log its value to the console
 */

/**
 * === TEST ===
 * Remove key/value pairs from the object where the value is 3 or over
 */

/**
 * === TEST ===
 * How can you use the `useEffect` hook to do something when the component mounts, and alternatively
 * when the component unmounts?
 */
