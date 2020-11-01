import React from 'react';
import '../css/extra.css';
function FillInput(props) {

    return (
      
        <div className="Fill">
        <input type={props.type} value={props.value}  placeholder=""  />
        </div>
      
    );
}

function FillButton(props) {

    return (
      
        <div className="Fill">
      <button type="submit" onClick={props.click} style={{color : props.color , backgroundColor : props.bg , margin : props.margin}} >{props.name}  </button>
        </div>
      
    );
}


function FillLabel(props){

    return (
    <label htmlFor="text" className="Fill-label" style={{color : props.color}} >{props.name}</label>
    );
}

function FillLink(props){

    return (
    <a href={props.herf} className="Fill-Link" style={{color : props.color}}>{props.name}</a>
    )
}

function FillButtonLink(props){
    return (
        <button type='button' onClick={props.click} className="FillButton-Link" style={{color : props.color}}>{props.name}</button>
        );
}

export { FillInput , FillButton  , FillLabel , FillLink , FillButtonLink} ;