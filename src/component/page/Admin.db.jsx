import React ,{useState }from 'react';
import { Link , useHistory} from 'react-router-dom';
import '../../css/admin.css';
import { api } from '../../utils/api';

function AdminDB() {

 

 
const h = useHistory();

const [Cont , setCont]= useState(null);

function logOut(){
    api.get("admin/logout").then((res=>{

        if(res.data.msg === "OK"){
                h.push("/AAL");
        }        

    })).catch(e=>{

       
    });
}


function Addproject(){

    setCont(null);
}
function EditF(){
   setCont(null);
}


    return (
        <>
            <div style={{backgroundColor:"white"}}>
                <div className="d-flex justify-content-center align-items-center w-100 panel-bar p-0 m-0 ">
                    <h5 style={{ textAlign: "center", color: "white" }}>Admin panel</h5>
                    <button className="logout-btn btn btn-primary" type="button" onClick={logOut}>logout</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <button className="nav-link btn h-btn" onClick={Addproject}>

             ADD Member <span className="sr-only">(current)</span>
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link btn h-btn" onClick={EditF} >
              Delete and rights <span className="sr-only">(current)</span>
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
export default AdminDB;