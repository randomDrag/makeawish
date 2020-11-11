import React from 'react';
import { FillButtonLink } from '../Extra';
import { useHistory } from 'react-router-dom';

function NotFound (){
    const hs = useHistory();
    return (
       <section className="vh-100 w-100 d-flex align-items-center justify-content-center m-0 p-0" style={{backgroundColor :"#6A097D"}}>
           <div>
           <h1 style={{fontFamily : "'Montserrat', sans-serif", fontSize : "7rem" , color: "#C060A1"}}>404</h1>
           <FillButtonLink color="#C060A1" click={()=>hs.push("/")} name=" home" />
           </div>
          

       </section>
    )
}

export default NotFound;