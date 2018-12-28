class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Thing One", "Thing 2", "Thing Four"]
        };
    }
    //handleDeleteOptions
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    //CHALLENGE
    //handlePick - pass down to Action and setup onClick - bind here
    //  randomly pick an option and alert it
    handlePick(){
        const randNum = Math.floor(Math.random() * this.state.options.length);
        // console.log(randNum);
        const pick = this.state.options[randNum];
        alert(pick);
    }
    render(){
        const title = "Indecision App";
        const subtitle = "Let a Computer Decide!";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    //---- No longer needed using Props ----//
        // handlePick(){
    //     alert("handlePick called")
    // }
    render(){
        return(
            <div>
                <button onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >What Should I Do?</button>
            </div>
        );
    }
}

//CHALLENGE - Options Component that holds all options
//CHALLENGE - Remove all button - alert
class Options extends React.Component {
    // THIS IS NO LONGER NEEDED DUE TO PASSING PROPS DOWN
    // constructor(props){
    //     super(props);//gives access to this.props
    //     //add on behavior here
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll(){
    //     console.log(this.props.options);
        
    //     // alert("handleRemoveAll called")
    // }

    render() {
        return (
            <div>
                <h3>Your Options:</h3>

                {this.props.options.map((option) => 
                    <Option key={option} optionText={option} />
                )}
                <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
            </div>
        );
    }
}

//CHALLENGE - Add Option component that handles individual options
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

//CHALLENGE - Add AddOptions Component handles button for adding option
//CHALLENGE - 1. Setup input form
// 2. create onSubmit
// 3. handleAddOption -> fetch value -> if value, alert!
class AddOption extends React.Component {
    handleFormSubmit(e) {
        e.preventDefault();
        // console.log("form submitted!");
        const option = e.target.elements.option.value.trim();

        //if there is input
        if (option) {
            //put the input in an array
            alert(option);
            
            // options.push(option);
            //clear the input
            e.target.elements.option.value = '';        
        }    
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add an Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));