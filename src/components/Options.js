import React from "react";
import Option from "./Option";

//convert Class to Stateless Function Component
const Options = (props) => (
    <div>

        <div className="widget-header">
            <h3 className="widget-header__title">Your Options:</h3>
        </div>

            {props.options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}

            {props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
            <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}>Remove All Options</button>
    </div>
    );

export default Options;