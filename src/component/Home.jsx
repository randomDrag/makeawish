import React, { useState ,useEffect} from 'react';
import Nvbar from './bar/Navbar';
import '../css/home.css';
import backImage from '../image/black.svg';
import { FillInput, FillButton } from '../component/Extra';
import Login from './page/Login';
import { api } from '../utils/api';
import { useHistory } from 'react-router-dom';
import PageTwo from './page/Page.two';

function Home() {
    useEffect(()=>{
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    },[])

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
        <>

            <section className="w-100 min-vh-100 p-0 m-0" style={{ background: "#6A097D" }}>
                {isclicked ? <Login close={()=>setIsClicked(false)} cardtype={card} /> : null}
                <Nvbar loginName="LOGIN" login={islogin} registername="REGISTER" register={()=>{setcard(false); setIsClicked(true);}}/>
                <div className="row m-0 w-100 p-0 m-0">

                    <div className="col-sm-9 w-100 m-0 d-flex align-items-center justify-content-center col1" >

                        <div className="home-title">
                            <h1>make a wish under amount 1.5 lakh</h1>
                            <p>if you are lucky will ship you for free</p>
                        </div>
                        <div className="background-stuff">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={backImage} alt="lamp" width="100%" height="100%" />
                            </div>

                        </div>

                    </div>

                    <div className="col-sm-3 w-100 m-0" >
                        <div className="d-flex align-items-center justify-content-center p-0 m -0 " style={{ height: "90vh" }}>

                            <div className="wish-card" >
                                <h6>make a wish under 1.5 lakh</h6>
                                <FillInput />
                                <FillButton name="SUBMIT" bg="#6A097D" color="#F1D4D4" margin="40px 0" />
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <PageTwo/>
            <div className="p-0 m-0" style={{ backgroundColor:"#6A097D" , height : "70px", width :"100%"}}>
                <ins className="adsbygoogle"
                    style={{ display: "block", height: "70px", minWidth: "300px", textAlign: 'center' }}
                    data-ad-client="ca-pub-8683834154321399"
                    data-ad-slot="4678688441"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
            </div>
        </>
    );


}

export default Home;