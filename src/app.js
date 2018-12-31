class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            // options: ["Thing One", "Thing 2", "Thing Four"]
            options: props.options
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
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
        
    }

    render(){
        const title = "Indecision App";
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
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
//convert Class to Stateless Function Component
const Header = (props) => {
    console.log(props);
    //conditional logic for subtitle
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
//example use of defaultProps
IndecisionApp.defaultProps = {
    options: []
}

Header.defaultProps = {
    title: "Indecision App"
};

//convert Class to Stateless Function Component
const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What Should I Do?</button>
        </div>
    );
};

//convert Class to Stateless Function Component
const Options = (props) => {
    return (
        <div>
            <h3>Your Options:</h3>

            {props.options.map((option) => 
                <Option key={option} optionText={option} />
            )}
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
        </div>
    );
}

//convert Class to Stateless Function Component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}


class AddOption extends React.Component {
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
        
        this.setState(() => {
            return {
                error: error
            };
        });

        //moved error logic up to component
            e.target.elements.option.value = '';        
        // }    
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));