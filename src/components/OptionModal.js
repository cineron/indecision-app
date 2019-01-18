import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption} 
            onRequestClose={props.handleClearPick} 
            contentLabel="selected option"
            closeTimeoutMS={200}
            className="modal"
            >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearPick}>Okay</button>
        </Modal>
    );

export { OptionModal as default } ;

//CHALLENGE
//Create a new event handler in indecisionApp that clears selectedOption
//pass that into OptionModal
//call it on button click