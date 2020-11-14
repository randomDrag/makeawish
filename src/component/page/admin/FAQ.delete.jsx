import React, { useState, useEffect } from 'react';


import '../../../css/faq.css';
import { api } from '../../../utils/api';
import { FillButtonLink } from '../../Extra';

function FAQdelete() {
  

    const [item, setitem] = useState([]);


    useEffect(() => {

        fetch();


    }, []);

    async function fetch() {

        api.get('/FAQ').then((doc) => {

            if(doc.data.msg){
                setitem(doc.data.data);
            }

        });
    }


    function del(id) {

        api.get(`/FAQ/del/${id}`).then((doc) => {

            if (doc.data.msg) {

                fetch();
            }

        });

    }


    function QA(props) {
        return (

            <div className='QA-div'>

                <h3>{props.question}</h3>
                <p>{props.answer}</p>
                <FillButtonLink name="delete" color="black" click={props.delete}/>

            </div>


        )
    }
    return (

        <section className="w-100 min-vh-100 p-0 m-0" style={{ background: "#6A097D" }}>
           <div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column">

                {item.map((data,index)=>
                <QA key={data._id} question={`${index+1} Q : ${data.QUESTION}`} answer={`A : ${data.QUESTION}`} delete={()=>{del(data._id)}}/>
                )}
            </div>
        </section>

    )
}

export default FAQdelete;