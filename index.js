const questions = [
  "What is JavaScript?",
  "What are the data types supported by JavaScript?",
  "What are the scopes of a variable in JavaScript?",
  "What is the purpose of ‘This’ operator in JavaScript?",
  "What is Callback function?",
  "What is the difference between null & undefined?",
  "Difference between “ == “ and “ === “ operators.",
  "What are arrow functions?",
];

const answer = [
  "JavaScript is a high-level, interpreted programming language that is widely used to create dynamic, interactive web pages and web applications. JavaScript is a client-side language, which means that it runs in the user's web browser rather than on a web server. In addition to its use in web development, JavaScript is also used in a wide range of other contexts, such as server-side scripting, desktop and mobile application development, game development, and even robotics.",

  "Number, String, Boolean, Null, Undefined, Object, Symbol, Array, Function",
  "The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes. Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.",

  "The this keyword is a special keyword in JavaScript that refers to the current execution context, or the object that the current function is a method of. The exact value of this depends on how the function is called and can be determined using a set of rules known as the 'binding rules'.",

  "A callback function is a function that is passed as an argument to another function and is then executed inside the called function. The primary purpose of a callback function is to allow asynchronous code to be executed in a sequential manner, by specifying what should happen after an asynchronous operation has completed.",

  "Undefined means the variable has been declared, but its value has not been assigned. Null means an empty value or a blank value.",

  "Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.",

  "Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.<code>let arrowAdd = (a,b) => a + b; </code>",
];
