import React, { useState, useEffect } from 'react';
import "../../../css/memberlist.css";
import deleteIcon from "../../../image/delete.svg";
import { api } from '../../../utils/api';
function Memberlist() {

    const [items, setItems] = useState([]);

    useEffect(() => {


        fetch();

    }, []);

    function fetch() {

        api.get("/admin").then((doc) => {

            if (doc.data.msg) {

                setItems(doc.data.data);
            }

        });

    }


function write(id) {

    api.get(`/admin/write/${id}`).then((doc) => {

        if (doc.data.msg) {

            fetch();
        }

    });
}

    function read(id) {

        api.get(`/admin/read/${id}`).then((doc) => {

            if (doc.data.msg) {

                fetch();
            }

        });

    }

    function del(id) {

        api.get(`/admin/del/${id}`).then((doc) => {

            if (doc.data.msg) {

                fetch();
            }

        });

    }


        function Formbox(props) {

            return (

                <div className="Formbox-card">
                    <div className="d-flex align-items-center justify-content-center" style={{ width: "100%" }}>

                        <div className="Formbox-index">
                            <h5>{props.index}</h5>
                        </div>
                        <div>
                            <h5 style={{ fontFamily: "montserrat ", color: "#F1D4D4" }}>{props.name}</h5>

                        </div>


                        <div className="Formbox-buttondiv">

                            <button type="submit" onClick={props.delete} className="Formbox-button"><img src={deleteIcon} width="100%" height="100%" /></button>
                            <button type="submit" onClick={props.write} className="Formbox-button">writable</button>
                            <button type="submit" onClick={props.read} className="Formbox-button">readable</button>

                        </div>
                    </div>


                    <br></br>
                </div>

            );

        }


        return (
            <>

                {items.map((doc, index) =>
                    <Formbox key={doc._id} index={index} name={doc.Email} write={() => write(doc._id)} read={() => read(doc._id)} delete={() => del(doc._id)} />
                )}

            </>
        );

    
}

    export default Memberlist;