console.log("app.js is running!");

const appObj = {
    title: "Indecision App",
    subtitle: "Let your computer decide.",
    options: ["one", "two"]
};
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

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);