class IndecisionApp extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Let a Computer Decide!</h2>
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
            <Option />
        );
    }
}

//CHALLENGE - Add Option component that handles individual options
class Option extends React.Component {
    render() {
        return (
            <div>
                <h3>Your Options:</h3>
                <ol>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ol>
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