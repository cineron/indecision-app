import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            // options: ["Thing One", "Thing 2", "Thing Four"]
            options: []
        };
    }
    //Lifecycle methods only work in Class-based components
    componentDidMount() {
        //test for valid JSON
        try {
            console.log("fetching data");
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            
            if (options) {
            this.setState(() => ({ options: options }));
            }
            
        } catch (error) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("saving data");
        }   
    }
    componentWillUnmount(){
        console.log("cWU");
    }
    //handleDeleteOptions
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
        // console.log("hDO", option);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick(){
        const randNum = Math.floor(Math.random() * this.state.options.length);
        // console.log(randNum);
        const pick = this.state.options[randNum];
        alert(pick);
    }
    handleAddOption(option){
        // console.log(option);
        if (!option) {
            return "Please enter a valid value."
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists!"
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        
    }

    render(){
        // const title = "Indecision App";
        const subtitle = "Let a Computer Decide!";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

//example use of defaultProps
// IndecisionApp.defaultProps = {
//     options: [1, 2, "three"]
// }