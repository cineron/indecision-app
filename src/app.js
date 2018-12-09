console.log("app.js is running!");

//create app object
// only render the wubtitle (and p tag) if subtitle exists
// render new p tag if options.length > 0
var appObj = {
    title: "Indecision App",
    subtitle: "Let your computer decide.",
    options: ["one," "two"]
};

function getSubtitle(subtitle) {
    if (subtitle) {
        return <p>{appObj.subtitle}</p>
    }
}
//JSX - JavaScript XML
var template = (
<div>
    <h1>{appObj.title}</h1>
    {getSubtitle(appObj.subtitle)}
    <ol>
        <li>Item one</li>
        <li>Item one</li>
    </ol>
</div>);

//create your own template
// div, h1:name, p:age, p:location
var user = {
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
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}!</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
