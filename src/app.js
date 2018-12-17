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

let count = 0;
const addOne = () => {
    count++;
    renderCounterapp();
};
const minusOne = () => {
    count--;
    renderCounterapp();
    console.log("minusONe");
};
const reset = () => {
    count = 0;
    renderCounterapp();
    console.log("reset");
};

const appRoot = document.getElementById("app");

const renderCounterapp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);

}

renderCounterapp();