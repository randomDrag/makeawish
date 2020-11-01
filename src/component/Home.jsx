import React from 'react';
import Nvbar from './bar/Navbar';
import '../css/home.css';
import backImage from '../image/black.svg';
import { FillInput, FillButton } from '../component/Extra';
import Login from './page/Login';
function Home() {

    return (
        <section className="w-100 h-100 p-0 m-0" style={{ background: "#6A097D" }}>
            <Login />
            <Nvbar />
            <div className="row m-0 w-100 p-0 m-0">

                <div className="col-sm-9 w-100 m-0 d-flex align-items-center justify-content-center col1" >

                    <div className="home-title">
                        <h1>make a wish under amount 1.5 lakh</h1>
                        <p>if you are lucky will ship you for free</p>
                    </div>
                    <div className="background-stuff">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={backImage} alt="lamp" width="100%" height="100%" />
                        </div>

                    </div>

                </div>

                <div className="col-sm-3 w-100 m-0" >
                    <div className="d-flex align-items-center justify-content-center p-0 m -0 " style={{ height: "90vh" }}>

                        <div className="wish-card" >
                            <h6>make a wish under 1.5 lakh</h6>
                            <FillInput />
                            <FillButton name="SUBMIT" bg="#6A097D" color="#F1D4D4" margin="40px 0" />
                        </div>

                    </div>
                </div>

            </div>

        </section>

    );


}

export default Home;