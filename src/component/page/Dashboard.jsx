import React from 'react';
import Nvbar from '../bar/Navbar';
import '../../css/dashboard.css';



function Dashboard() {

    return (

        <section className="vh-100 w-100 p-0 m-0" style={{ background: "#6A097D" }}>
            <Nvbar />
         
            <div className="d-flex align-items-center justify-content-center flex-column ">

                <div className="dashbord-text">
                 <h1> HELLO , sumit</h1>   
                </div>
            <div className="dashboard-wishtitle">
                <h3> your wishes</h3>
            </div>

            </div>

        </section>


    );


}

export default Dashboard;