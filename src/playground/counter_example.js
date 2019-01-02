//==== USING REACT STATE =====//
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        //test for valid JSON
        try {
            console.log("fetching data");
            const json = localStorage.getItem("count");
            const count = parseInt(json, 10);
            
            if (!isNaN(count)) {
            this.setState(() => ({ count: count }));
            }
            
        } catch (error) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem("count", json);
            console.log("saving data");
        }   
    }

    handleAddOne(){
        // console.log("handleAddOne");
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        // console.log("handleMinusOne");
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        // console.log("handleReset");
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));