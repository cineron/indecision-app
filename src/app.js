console.log("app.js is running!");

//create app object
// only render the wubtitle (and p tag) if subtitle exists
// render new p tag if options.length > 0
const appObj = {
    title: "Indecision App",
    subtitle: "Let your computer decide.",
    options: ["one", "two"]
};

// function getSubtitle(subtitle) {
//     if (subtitle) {
//         return <h2>{appObj.subtitle}</h2>
//     }
// }
//JSX - JavaScript XML
const template = (
<div>
    <h1>{appObj.title}</h1>
    {appObj.subtitle && <h2>{appObj.subtitle}</h2>}
    <p>{appObj.options.length > 0 ? "Your options" : "No options"}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>
);

//create your own template
// div, h1:name, p:age, p:location
// const user = {
//     name: "Mike",
//     age: 18,
//     location: "Austin",
// };
//if statement
//
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }
//ternary
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}!</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

//============================//
let count = 0;
const addOne = () => {
    console.log("addONe");
};
const minusOne = () => {
    console.log("minusONe");
};
const reset = () => {
    console.log("reset");
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

//===Challenge===//
// add Button "-1", minusOne function, log "minus one"
// add "reset" Button, function and log


const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo, appRoot);
