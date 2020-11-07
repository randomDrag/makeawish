import React from 'react';
import Nvbar from '../bar/Navbar';
import { api } from '../../utils/api';
import { FillAlert } from '../Extra';
import { useHistory } from 'react-router-dom';
function Welcome() {
    const his = useHistory();

    async function logout(){
         await api.get("loginuser/logout").then((doc)=>{
 
             if(doc.data.msg){
 
                 <FillAlert top="10%" right="10%" heading="Logout " info="successfully"/>
 
                 his.push('/');
             }
 
         })
     }
 
    return (
        <>
          <section className="vh-100 w-100 p-0 m-0" style={{ background: "#6A097D" }}>
            <Nvbar loginName="LOGOUT" login={logout} />
         
            <div className="d-flex align-items-center justify-content-center flex-column ">

            </div>

        </section>

        </>
    );
}

export default Welcome;