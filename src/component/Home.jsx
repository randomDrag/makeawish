import React from 'react';
import '../css/home.css';
import backImage from '../image/black.svg';

function Home() {

    return (
        <section className="w-100 vh-100 p-0 m-0" style={{background : "#6A097D" }}>

            <div className="row m-0 w-100">

                <div className="col-sm-9 w-100 vh-100 m-0 d-flex align-items-center justify-content-center" style={{border:"2px solid  red" , position : 'relative' , zIndex : "1"}}>
                    
                    <div className="home-title">
                    <h1>make a wish under amount 1.5 lakh</h1>
                    <p>if you are lucky will ship you for free</p>
                    </div>
                    <div className="background-stuff">
                        <div className="d-flex align-items-center justify-content-center">
                        <img src={backImage} alt="lamp" width="100%" height="100%"/>
                        </div>

                    </div>
                 
                </div>

                <div className="col-sm-3 w-100 m-0" style={{border:"2px solid  white"}}>
            2
                </div>

            </div>

        </section>

    );


}

export default Home;