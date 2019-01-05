console.log("utils.js is running.");

export const square = (x) => x * x; //export inline works on named variables

const add = (a, b) => a + b;

//exports - default and named

export { add }; //not an object //only references