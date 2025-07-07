const javascriptQuestions = [
  {
    question: "What is the output of `typeof undefined`?",
    options: ["'object'", "'undefined'", "'NaN'", "'null'"],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to join array elements into a string?",
    options: ["split()", "join()", "slice()", "concat()"],
    correctAnswer: 1,
  },
  {
    question: "What does `Array.isArray([])` return?",
    options: ["true", "false", "null", "undefined"],
    correctAnswer: 0,
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["===", "=", ":", "=="],
    correctAnswer: 1,
  },
  {
    question: "What does `NaN === NaN` return?",
    options: ["NaN", "false", "true", "undefined"],
    correctAnswer: 1,
  },
  {
    question:
      "Which loop will execute at least once even if the condition is false?",
    options: ["for", "while", "foreach", "do...while"],
    correctAnswer: 3,
  },
  {
    question: "Which method is used to remove the last element of an array?",
    options: ["slice()", "splice()", "shift()", "pop()"],
    correctAnswer: 3,
  },
  {
    question: "What does `typeof []` return?",
    options: ["'object'", "'list'", "'undefined'", "'array'"],
    correctAnswer: 0,
  },
  {
    question: "How can you convert a string to a number?",
    options: ["Number()", "parseFloat()", "All of the above", "parseInt()"],
    correctAnswer: 2,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "/*", "<!--"],
    correctAnswer: 0,
  },
  {
    question: "What is the result of `'5' - 3`?",
    options: ["'2'", "'53'", "2", "undefined"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["boolean", "undefined", "string", "float"],
    correctAnswer: 3,
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["undefined", "null", "0", "NaN"],
    correctAnswer: 0,
  },
  {
    question: "What keyword declares a block-scoped variable?",
    options: ["const", "let", "var", "both let and const"],
    correctAnswer: 3,
  },
  {
    question: "Which function is used to delay execution?",
    options: ["clearTimeout()", "setTimeout()", "setInterval()", "sleep()"],
    correctAnswer: 1,
  },
  {
    question: "Which object does not have a length property?",
    options: ["Arguments", "String", "Array", "Object"],
    correctAnswer: 3,
  },
  {
    question: "Which keyword is used to define a class in ES6?",
    options: ["constructor", "object", "class", "function"],
    correctAnswer: 2,
  },
  {
    question: "How do you declare an async function?",
    options: [
      "async: function myFunc()",
      "function async myFunc() {}",
      "async => myFunc()",
      "async function myFunc() {}",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which method executes a function once for each array element?",
    options: ["filter()", "forEach()", "map()", "reduce()"],
    correctAnswer: 1,
  },
  {
    question: "Which value is falsy?",
    options: ["false", "0", "''", "All of the above"],
    correctAnswer: 3,
  },
  {
    question: "How do you define a constant in JavaScript?",
    options: [
      "#define PI 3.14",
      "PI = 3.14;",
      "constant PI = 3.14;",
      "const PI = 3.14;",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onchange", "onmouseover", "onmouseclick"],
    correctAnswer: 0,
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Digital Ordinance Model",
      "Document Object Model",
      "Data Object Model",
      "Desktop Object Model",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which symbol is used to access properties in an object?",
    options: [";", "#", ".", ":"],
    correctAnswer: 2,
  },
  {
    question: "Which method adds a new element to the beginning of an array?",
    options: ["shift()", "concat()", "push()", "unshift()"],
    correctAnswer: 3,
  },
  {
    question: "Which method creates a shallow copy of a portion of an array?",
    options: ["splice()", "slice()", "split()", "join()"],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `'5' + 3`?",
    options: ["8", "'53'", "'8'", "undefined"],
    correctAnswer: 1,
  },
  {
    question: "Which function converts a JavaScript object to JSON?",
    options: [
      "JSON.stringify()",
      "JSON.encode()",
      "JSON.objectify()",
      "JSON.parse()",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the output of `null == undefined`?",
    options: ["null", "true", "false", "undefined"],
    correctAnswer: 1,
  },
  {
    question: "What keyword stops a loop?",
    options: ["exit", "halt", "stop", "break"],
    correctAnswer: 3,
  },
  {
    question: "What is the result of `typeof function() {}`?",
    options: ["'method'", "'class'", "'object'", "'function'"],
    correctAnswer: 3,
  },
  {
    question:
      "Which built-in method returns the string representation of a number?",
    options: ["toString()", "join()", "valueOf()", "toFixed()"],
    correctAnswer: 0,
  },
  {
    question: "How do you check if a value is an array?",
    options: ["Both A and C", "Array.isArray()", "typeof", "instanceof"],
    correctAnswer: 0,
  },
  {
    question: "What does `Math.floor(4.7)` return?",
    options: ["NaN", "4", "5", "4.7"],
    correctAnswer: 1,
  },
  {
    question: "What will `!!0` return?",
    options: ["false", "true", "undefined", "0"],
    correctAnswer: 0,
  },
  {
    question: "What is the output of `1 + '1'`?",
    options: ["'11'", "'2'", "NaN", "2"],
    correctAnswer: 0,
  },
  {
    question: "How do you write an arrow function?",
    options: ["()=>{}", "arrow() => {}", "(=>) => {}", "function => {}"],
    correctAnswer: 0,
  },
  {
    question: "Which is a valid array declaration?",
    options: [
      "let arr = array();",
      "let arr = new Object();",
      "let arr = [];",
      "let arr = {}",
    ],
    correctAnswer: 2,
  },
  {
    question: "How do you round a number to nearest integer?",
    options: ["Math.ceil()", "Math.abs()", "Math.floor()", "Math.round()"],
    correctAnswer: 3,
  },
  {
    question: "What does `===` compare in JavaScript?",
    options: ["Memory Reference", "Only Value", "Only Type", "Value and Type"],
    correctAnswer: 3,
  },
  {
    question: "Which is the correct way to write a comment?",
    options: ["** Comment **", "<!-- Comment -->", "# Comment", "// Comment"],
    correctAnswer: 3,
  },
  {
    question: "How do you check if a variable is not undefined?",
    options: ["x !== null", "typeof x !== 'undefined'", "x != null", "x !== 0"],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `'2' * 3`?",
    options: ["6", "'23'", "NaN", "'6'"],
    correctAnswer: 0,
  },
  {
    question: "How do you declare a JavaScript object?",
    options: [
      "let obj = ''",
      "let obj = () => {}",
      "let obj = [];",
      "let obj = {};",
    ],
    correctAnswer: 3,
  },
  {
    question: "What does `parseInt('10.5')` return?",
    options: ["NaN", "10.5", "10", "11"],
    correctAnswer: 2,
  },
  {
    question: "What is `localStorage` used for?",
    options: [
      "Event handling",
      "CSS storage",
      "AJAX calls",
      "Storing data in browser",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which is not a loop structure in JS?",
    options: ["for", "while", "foreach", "do...while"],
    correctAnswer: 2,
  },
  {
    question: "Which character is used for spread/rest?",
    options: ["...", "++", "**", "$$"],
    correctAnswer: 0,
  },
  {
    question: "What is the output of `[1,2,3].length`?",
    options: ["1", "undefined", "2", "3"],
    correctAnswer: 3,
  },
  {
    question: "Which keyword is used for inheritance in ES6 classes?",
    options: ["extends", "inherits", "prototype", "super"],
    correctAnswer: 0,
  },
  {
    question: "Which object is the parent of all JavaScript objects?",
    options: ["Base", "Global", "Object", "Root"],
    correctAnswer: 2,
  },
];

export default javascriptQuestions;
