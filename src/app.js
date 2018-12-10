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
    {/* {getSubtitle(appObj.subtitle)} */}
    {appObj.subtitle && <h2>{appObj.subtitle}</h2>}
    <p>{appObj.options.length > 0 ? "Your options" : "No options"}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>);

//create your own template
// div, h1:name, p:age, p:location
const user = {
    name: "Mike",
    age: 18,
    location: "Austin",
};
//if statement
//
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
//ternary
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}!</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
