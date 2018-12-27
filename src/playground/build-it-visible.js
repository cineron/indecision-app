console.log("build-it-visible is running!");

// const appObj = {
//     title: "Visibilty Toggle",
//     details: "This is some words... text.. elements... input... s... primitive... STRING!"
// };

// const handleVisibility = () => {
//     visibility = !visibility;
//     render();    
// };

// let visibility = false;

// const render = () => {

//     const template = (
//         <div>
//             <h1>{appObj.title}</h1>
//             <button onClick={handleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
//             {visibility && (
//                 <p>{appObj.details}</p>)}

//         </div>
//     )
//     ReactDOM.render(template, app);
// };

// render();

//==============================//
//CHALLENGE - Build the above as React Components
//VisibilityToggle - render, constructor, handleToggleVisibility
//Visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {visibility : !prevState.visibility};
        });
    }
    render(){
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (<p>Details here</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));