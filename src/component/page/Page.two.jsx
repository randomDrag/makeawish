import React, { useEffect, useState } from 'react';
import '../../css/pagetwo.css';
import { api } from '../../utils/api';

function PageTwo() {

    const [Nwish, setNwish] = useState("");
    const [Nwinner, setNwinner] = useState("")
    const [Nshipped, setNshipped] = useState("")

    useEffect(() => {
        
        nod();


    }, [])

    async function nod() {

        await api.get("/userinfo/numberofall").then((doc) => {

            if (doc.data.msg) {


                let wishes = 1500 + (doc.data.doc * 4);
                let winner = 700 + (doc.data.doc * 3);
                let shipped = 650 + (doc.data.doc * 2);

                setNwish(wishes);
                setNwinner(winner);
                setNshipped(shipped);
            }

        });
    }

    return (

        <section className="min-vh-100 w-100" style={{ backgroundColor: "#6A097D" }}>

            <div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column">
                <div className="pageTwo-title">
                    <h2>Number of wishes and lucky member every week</h2>
                </div>

                <div className="boxes-page-two">
                    <div className="boxes-divs"  >
                        <h3>wishes</h3>
                        <div className="box2-pagetwo ex" >  <h3>{Nwish}</h3> </div>

                    </div>
                    <div className="boxes-divs" >
                        <h3>winner</h3>
                        <div className="box2-pagetwo" >  <h3>{Nwinner}</h3> </div>

                    </div>
                    <div className="boxes-divs" >
                        <h3>shipped</h3>
                        <div className="box2-pagetwo" >  <h3>{Nshipped}</h3> </div>

                    </div>
                </div>


            </div>
           

        </section>

    )


}

export default PageTwo;