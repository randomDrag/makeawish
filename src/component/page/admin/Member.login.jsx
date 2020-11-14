import React from 'react';
import Alogin from './Admin.login.card';


function MemberLogin() {

    return (
        <section className="d-flex align-items-center justify-content-center w-100 vh-100 m-0 p-0" style={{backgroundColor : "#6A097D"}}>
  <Alogin name="login" apivalue={"/member/login"} history="/" sec="/memberdb" />
        </section>
    
      
    );


}

export default MemberLogin