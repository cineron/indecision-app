console.log("app.js is running!");

const appObj = {
    title: "Indecision App",
    subtitle: "Let your computer decide.",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    const option = e.target.elements.option.value;
    //console.log(e);//results in a React *SyntheticEvent* which nullifies the properties so they can be reused. https://reactjs.org/docs/events.html#event-pooling

    //if there is input
    if (option) {
        //put the input in an array
        appObj.options.push(option);
        //clear the input
        e.target.elements.option.value = '';
        renderForm();
        // console.log(appObj.options);
        
    }    
};


const appRoot = document.getElementById("app");

const renderForm = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <h2>{appObj.subtitle}</h2>}
            <p>{appObj.options.length > 0 ? "Your options" : "No options"}</p>
            <p>{appObj.options.length}</p>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
ReactDOM.render(template, appRoot);

}

renderForm();