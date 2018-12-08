console.log("app.js is running!");

//create app object
var appObj = {
    title: "Indecision_App",
    subtitle: "Text from object property"
}


//JSX - JavaScript XML
var template = (
<div>
    <h1>{appObj.title}</h1>
    <p>{appObj.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item one</li>
    </ol>
</div>);

//create your own template
// div, h1:name, p:age, p:location
var user = {
    name: "Mike",
    age: 46,
    location: "Dallas"
};


var templateTwo = (
    <div>
        <h1>{user.name + "!"}!</h1>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
