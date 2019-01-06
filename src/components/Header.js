import React from "react";

//convert Class to Stateless Function Component
const Header = (props) => {
    // console.log(props);
    //conditional logic for subtitle
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision App"
};

export default Header;