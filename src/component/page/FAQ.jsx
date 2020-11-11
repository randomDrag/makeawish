import React,{useState}from 'react';
import Login from './Login';
import Nvbar from '../bar/Navbar';
import { useHistory } from 'react-router-dom';
import { api } from '../../utils/api';

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
    return (

        <section className="w-100 min-vh-100 p-0 m-0" style={{ background: "#6A097D" }}>
            {isclicked ? <Login close={() => setIsClicked(false)} cardtype={card} /> : null}
            <Nvbar loginName="LOGIN" login={islogin} registername="REGISTER" register={() => { setcard(false); setIsClicked(true); }} />

        </section>

    )
}

export default FAQ;