import React from "react";

//convert Class to Stateless Function Component
const Action = (props) => {
    return(
        <div>
            <button className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What Should I Do?</button>
        </div>
    );
};

export default Action;