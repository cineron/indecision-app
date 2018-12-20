console.log("build-it-visible is running!");

const appObj = {
    title: "Visibilty Toggle",
    details: "This is some words... text.. elements... input... s... primitive... STRING!"
};

const handleVisibility = () => {
    visibility = !visibility;
    render();    
};

let visibility = false;

const render = () => {

    const template = (
        <div>
            <h1>{appObj.title}</h1>
            <button onClick={handleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
            {visibility && (
                <p>{appObj.details}</p>)}

        </div>
    )
    ReactDOM.render(template, app);
};

render();
