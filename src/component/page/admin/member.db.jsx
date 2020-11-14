import React ,{useState ,useEffect} from 'react';
import {  useHistory} from 'react-router-dom';
import { api } from '../../../utils/api';
import Add from './Addform.faq';
import FAQdelete from './FAQ.delete';
import PepForm from './Pep.form';


function MemberDB() {

   
 
const h = useHistory();

const [Cont , setCont]= useState(null);

function logOut(){
    
    api.get("/admin/logout").then((res=>{

        if(res.data.msg === "OK"){
                h.push("/AAL");
        }        

    })).catch(e=>{

       
    });
}


function Addproject(){

 
    

    setCont(<PepForm/>);
  
}
function EditF(){
   setCont(<Add/>);
}
function faq(){
    setCont(<FAQdelete/>);
 }


    return (
        <>
            <div style={{backgroundColor:"white"}}>
                <div className="d-flex justify-content-center align-items-center w-100 panel-bar p-0 m-0 ">
                    <h5 style={{ textAlign: "center", color: "white" }}>member panel</h5>
                    <button className="logout-btn btn btn-primary" type="button" onClick={logOut}>logout</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <button className="nav-link btn h-btn" onClick={Addproject}>

             DOCUMENT <span className="sr-only">(current)</span>
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link btn h-btn" onClick={EditF} >
              FAQ <span className="sr-only">(current)</span>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn h-btn" onClick={faq} >
              FAQ DELETE <span className="sr-only">(current)</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

                           {Cont} 


                        </div>

                    </div>
                </div>
            </div>
        </>
    );


}

export default MemberDB;