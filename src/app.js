class IndecisionApp extends React.Component {
    render(){
        const title = "Indecision App";
        const subtitle = "Let a Computer Decide!";
        const options  = ["Thing One", "Thing Two", "Thing Four"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
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
    render(){
        return(
            <div>
                <button>What Should I Do?</button>
            </div>
        );
    }
}

//CHALLENGE - Options Component that holds all options
class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Your Options:</h3>

                {this.props.options.map((option) => 
                    <Option key={option} optionText={option} />
                )}
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
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add an Option</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));