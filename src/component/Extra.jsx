import React, { useRef, useEffect } from 'react';
import '../css/extra.css';
import { TimelineLite, Power4 } from 'gsap';

function FillInput(props) {

    return (

        <div className="Fill">
            <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.change} name={props.name}/>
        </div>

    );
}

function FillButton(props) {

    return (

        <div className="Fill">
            <button type="submit" onClick={props.click} style={{ color: props.color, backgroundColor: props.bg, margin: props.margin }} >{props.name}  </button>
        </div>

    );
}


function FillLabel(props) {

    return (
        <label htmlFor="text" className="Fill-label" style={{ color: props.color }} >{props.name}</label>
    );
}

function FillLink(props) {

    return (
        <a href={props.herf} className="Fill-Link" style={{ color: props.color }}>{props.name}</a>
    )
}

function FillButtonLink(props) {
    return (
        <button type='button' onClick={props.click} className="FillButton-Link" style={{ color: props.color }}>{props.name}</button>
    );
}


function FillAlert(props) {
    let al = useRef('null');
    let tl = new TimelineLite();

    useEffect(() => {

        tl.to(al, {
            display: "flex"

        }).to(al, {
            duration: 2,
            opacity: '1',
            translateY: "-20%",
            ease: Power4.easeInOut
        });

        setTimeout(close, 5000);


    }, [])

    function close() {
        tl.to(al, {
            duration: 2,
            opacity: 0,
            ease: Power4.easeInOut
        }).to(al, {
            display: 'none'
        })

    }

    return (
        <>
            <div ref={el => al = el} className="FILL-alert" style={{ display: "none", opacity: '0', top: props.top, right: props.right }}>
                <div className="alert-button">
                    <FillButtonLink color="black" click={close} name="&times;" />
                </div>
                <div className="alert-head">
                    <h6> {props.heading}</h6>
                </div>
                <div className="alert-para">
                    <p> {props.info}</p>
                </div>
            </div>
        </>
    );
}

export { FillInput, FillButton, FillLabel, FillLink, FillButtonLink, FillAlert };