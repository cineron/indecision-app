import React from "react";

//export default works for class definitions, not variables
export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    // constructor removed for JSnext syntax
    // constructor(props){
    //     super(props)
    //     this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //     // --- moved above for JSnext syntax
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }

    //converted to arrow function for JSnext syntax
    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("form submitted!");
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        //moved error logic up to component
        if (!error) {
            e.target.elements.option.value = '';        
        }   
    };
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option" />
                    <button className="button">Add an Option</button>
                </form>
            </div>
        );
    }
}