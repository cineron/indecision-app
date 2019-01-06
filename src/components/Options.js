import React from "react";
import Option from "./Option";

//convert Class to Stateless Function Component
const Options = (props) => {
    return (
        <div>
            <h3>Your Options:</h3>

            {props.options.length === 0 && <p>Please add an option to get started!</p>}

            {props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
        </div>
    );
}

export default Options;