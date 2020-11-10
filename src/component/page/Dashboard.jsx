import React, { useEffect, useState } from 'react';
import Nvbar from '../bar/Navbar';
import '../../css/dashboard.css';
import { api } from '../../utils/api';
import { FillAlert, FillButton, FillButtonLink, FillInput, FillLabel } from '../Extra';
import { useHistory } from 'react-router-dom';


function Dashboard() {

    const [name, setName] = useState("");
    const [wish, setWish] = useState([3]);
    const [addWish, setAddWish] = useState("");


    useEffect(() => {

        namefun();
        
    }, []);

    async function namefun() {
        await api.get("/userinfo/username/data").then((doc) => {

            setName(doc.data.data.userInfo.NAME);
            setWish(doc.data.data.userInfo.WISH);
        })

    }

    async function wishdata() {
        await api.get("/userinfo/username/data").then((doc) => {

            setWish(doc.data.data.userInfo.WISH);
        })

    }


    const his = useHistory();

    async function logout() {
        await api.get("loginuser/logout").then((doc) => {

            if (doc.data.msg) {

                <FillAlert top="10%" right="10%" heading="Logout " info="successfully" />

                his.push('/');
            }

        })
    }

    async function wishsubmit(){
            api.post("/userinfo/add/wish",{wish : addWish}).then((doc)=>{

                if(doc.data.msg){
                    wishdata();
                }


            });

    }

    function removeID(id){
        api.get(`/userinfo/remove/${id}`).then((doc)=>{
console.log(doc);
        });

    }

    function Itemcard(props){
        return (
            <div className="wish-list-main">
                <h4>{props.name}</h4>
                <div className="wish-button">
                    <FillButtonLink name="Edit" color="#F1D4D4" click={props.edit} />
                    <FillButtonLink name="Remove" color="#F1D4D4" click={props.remove} />
                </div>

            </div>
            );
    }

    return (

        <section className="h-100 w-100 p-0 m-0" style={{ background: "#6A097D" }}>
            <Nvbar loginName="LOGOUT" login={logout} />

            <div className="d-flex align-items-center justify-content-center flex-column ">

                <div className="dashbord-text">
                    <h1> HELLO , {name}</h1>
                </div>
                <div className="dashboard-wishtitle">
                    <h3> your wishes</h3>
                </div>

                <div className="wish-list-card">

                    {wish.map((data,index) => 
                       
                       <Itemcard key={index} name={data.Wish_NAME} remove={()=> removeID(data._id)} />

                    )}


                </div>
                <div style={{ position: "relative", bottom: "20px" }}>
                    <FillLabel name="ADD WISH" color="#F1D4D4" />
                    <FillInput type="text" placeholder="enter wish here" change={e => setAddWish(e.currentTarget.value)} value={addWish}/>
                    <FillButton name="ADD" margin="15px 0" click={wishsubmit} />
                </div>

            </div>

        </section>


    );


}

export default Dashboard;