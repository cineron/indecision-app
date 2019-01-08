import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption} 
            onRequestClose={props.handleClearPick} 
            contentLabel="selected option"
            >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearPick}>Okay</button>
        </Modal>
    );

export { OptionModal as default } ;

//CHALLENGE
//Create a new event handler in indecisionApp that clears selectedOption
//pass that into OptionModal
//call it on button click