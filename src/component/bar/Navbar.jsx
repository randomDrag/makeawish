import React, { useState } from 'react';
import { gsap, Power4 } from 'gsap';
import '../../css/navbr.css';
import {useHistory} from 'react-router-dom';
import logo from '../../image/white.svg';

import Mlogo from '../../image/makeanav.svg';

function NavBar(props) {

    const [menu, setMenu] = useState(nav());
    
    let isMobile = true;

    const hs = useHistory();

    function ButtonClick(props) {

        return (
            <button className="menu-btn opt" onClick={props.click}>{props.name}</button>
        )
    }


    function menuRunner() {
        setMenu(isMobile ? mobileMenu() : nav());



        if (isMobile) {
            isMobile = false;
        } else {
            isMobile = true;
        }


    }




    function mobileMenu() {

        return (

            <div className=" vh-100 vw-100 d-flex  justify-content-center align-self-center mobile-nav"  >


                <div className=" align-self-center" >
                    <ul className="navbar-nav w-100 h-100" >

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: "block" }}>



                            <div>
                                <li className="nav-item ">
                                    <div>
                                    <ButtonClick click={props.login} name={props.loginName} />
                                    </div>
                             
                                </li>
                                
                                <li className="nav-item">
                                    <div>
                                    <ButtonClick click={props.register} name={props.registername} />
                                    </div>
                               
                                </li>
                                <li className="nav-item">
                                    <div>
                                    <ButtonClick click={()=>{hs.push("/FAQ")}} name="FAQ" />
                                    </div>
                                
                                </li>


                            </div>
                        </div>



                    </ul>

                </div>
                <div className="close-btn">
                    <button onClick={menuRunner} style={{ width: '10wh', height: "10vh" }}
                    >&times;</button>

                </div>
            </div>

        );
    }


    function nav() {

        return (
            <nav className="navbar navbar-expand-sm  w-100 " style={{ position: "relative", top: "0", zIndex: "3", padding: "0" }} >

                <div className="d-flex w-100" >

                    <div className="align-self-center">
                        <div className="navbar-brand nav-des " > <img src={logo} alt="wish logo" width="100%" height="100%" /> Make a wish</div>
                    </div>

                    <div className=" w-100" >
                        <ul className="navbar-nav ">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <div className=" d-flex w-100 justify-content-center align-self-center" >
                                    <div className="box " >

                                        <li className="nav-item">
                                            <ButtonClick click={props.login} name={props.loginName} />
                                        </li>

                                        <li className="nav-item">
                                        <ButtonClick click={props.register} name={props.registername} />
                                        </li>
                                        <li className="nav-item">
                                            <ButtonClick click={()=>{hs.push("/FAQ")}} name="FAQ" />

                                        </li>
                                        
                                    </div>
                                </div>

                            </div>

                            <div className="align-self-center">
                                <div className=" d-flex w-100 justify-content-center" >
                                    <div className="box " >
                                    <button className="navbar-toggler " type="button" data-toggle="collapse" onClick={menuRunner} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span >
                                                <img src={Mlogo} alt="menuBar" width="25vw" height="25vh" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>




                        </ul>
                    </div>

                </div>

            </nav>
        );
    }

    return (
        <>
            {menu}

        </>

    );
}

export default NavBar;
