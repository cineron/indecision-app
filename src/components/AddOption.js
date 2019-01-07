import React from "react";

//export default works for class definitions, not variables
export default class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleFormSubmit(e) {
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
                    <button>Add an Option</button>
                </form>
            </div>
        );
    }
}