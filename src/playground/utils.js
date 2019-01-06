console.log("utils.js is running.");

const square = (x) => x * x; //export inline works on named variables

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

export default substract; //can only have expression

//exports - default and named
// export { square, add, substract as default}; //not an object //only references

export { square, add}; //not an object //only references
//"as default" sets up default 