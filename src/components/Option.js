import React from "react";

//convert Class to Stateless Function Component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }} >Remove</button>
        </div>
    );
}

export default Option;