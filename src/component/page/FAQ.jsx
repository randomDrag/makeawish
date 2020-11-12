import React,{useState}from 'react';
import Login from './Login';
import Nvbar from '../bar/Navbar';
import { useHistory } from 'react-router-dom';
import { api } from '../../utils/api';
import '../../css/faq.css';

function FAQ() {
    const his = useHistory();
    const [isclicked, setIsClicked] = useState(false);
    const [card ,setcard]=useState(null);

    function islogin() {
        
        api.get('loginuser/isAuth').then((doc) => {
            if ( doc.data.msg) {

                if(doc.data.isfirsttime){
                    his.push('/welcome');
                }else{
                    his.push('/user');
                }
               

           
            }
            else {
                setcard(true);
                setIsClicked(true);
            }
        }).catch((e)=>{

        })

    }

    function QA(){
        return(
            
            <div className = 'QA-div'>

            <h3> this is a qustion</h3>
            <p> this is an answer</p>

        </div>


        )
    }
    return (

        <section className="w-100 min-vh-100 p-0 m-0" style={{ background: "#6A097D" }}>
            {isclicked ? <Login close={() => setIsClicked(false)} cardtype={card} /> : null}
            <Nvbar loginName="LOGIN" login={islogin} registername="REGISTER" register={() => { setcard(false); setIsClicked(true); }} />

                <div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column">

                </div>
        </section>

    )
}

export default FAQ;