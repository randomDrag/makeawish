import React, { useEffect, useState } from 'react';
import Nvbar from '../bar/Navbar';
import { api } from '../../utils/api';
import { FillAlert, FillButton, FillInput, FillLabel, FillOption, FillSelect } from '../Extra';
import { useHistory } from 'react-router-dom';
import '../../css/welcome.css';
import Loading from '../Loading';
function Welcome() {
    const his = useHistory();

    const [Fields, setFields] = useState({

        NAME: "",
        AGE: "",
        PLACE: ""
    });

    const [gender , setGender]=useState("");
    const [areyou , setareyou]=useState("");
    const [isloading , setIsloading]=useState(false);


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setFields((preval) => {
            if (name === "FullName") {
                return {
                    NAME: value,
                    AGE:preval.AGE,
                    PLACE: preval.PLACE
                }
            }else if (name === "AGE"){
                return {
                    NAME: preval.NAME,
                    AGE:value,
                    PLACE: preval.PLACE
                }

            }else if (name === "PLACE"){
                return {
                    NAME: preval.NAME,
                    AGE:preval.AGE,
                    PLACE: value
                }

            }
        });

    }


    useEffect(() => {

        setTimeout(ads, 2000);


    }, []);

    function ads() {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }

    async function logout() {
        await api.get("loginuser/logout").then((doc) => {

            if (doc.data.msg) {

                <FillAlert top="10%" right="10%" heading="Logout " info="successfully" />

                his.push('/');
            }

        })
    }

    async function submit(){

        setIsloading(true)
        api.post('/userinfo/firstpage',{NAME : Fields.NAME , AGE : Fields.AGE , PLACE : Fields.PLACE ,
            GENDER : gender ,occupation: areyou })
        .then((doc)=>{

           if(doc.data.msg){
               his.push("/user");
               setIsloading(false);
           }else{
            his.push("/");
           }

        });


    }




    return (
        <>
            <section className="vh-100 w-100 p-0 m-0" style={{ background: "#6A097D" }}>
                <Nvbar loginName="LOGOUT" login={logout} />

                <div className="row h-100 w-100 p-0 m-0">
                    <div className="col-md-8 col-12 h-100 w-100 m-0 p-0">
                        <div className="d-flex align-items-center justify-content-center flex-column  w-100 h-90">
                            <div className="final-welcome">
                                <h3>Welcome , last step</h3>

                            </div>

                            <div className="d-flex align-items-center justify-content-center flex-column h-100 w-100" style={{ margin: "20px auto", padding: '10px' }}>
                                <div>
                                    <FillLabel name="Full Name" color="#F1D4D4" />
                                    <FillInput name="FullName" change={handleChange} value={Fields.NAME} />
                                </div>
                                <div>
                                    <FillLabel name="Age" color="#F1D4D4" />
                                    <FillInput name="AGE" change={handleChange} value={Fields.AGE} />
                                </div>
                                <div>
                                    <FillLabel name="STATE" color="#F1D4D4" />
                                    <FillInput name="PLACE" change={handleChange} value={Fields.PLACE} />
                                </div>
                                <div>
                                    <FillLabel name="Gender" color="#F1D4D4" />


                                    <FillSelect Name="gender" v="select" options={
                                        [<FillOption key="0" value="select" name="select" />,
                                        <FillOption key="1" value="Male" name="Male" />,
                                        <FillOption key="2" value="Female" name="Female" />,
                                        <FillOption key="3" value="Other" name="other" />,

                                        ]
                                    } placeholder="gender" value={gender} onChange={e => setGender(e.currentTarget.value)} />
                                </div>

                                <div>
                                    <FillLabel name="Are you" color="#F1D4D4" />


                                    <FillSelect Name="category" v="select" options={
                                        [<FillOption key="0" value="select" name="select" />,
                                        <FillOption key="1" value="student" name="Student" />,
                                        <FillOption key="2" value="Other" name="other" />,

                                        ]
                                    } placeholder="Are you" value={areyou} onChange={e => setareyou(e.currentTarget.value)} />
                                </div>


                                <div>
                                { isloading ? <Loading/> : <FillButton name="submit" margin="15px 0" color="#6A097D" bg="#F1D4D4" click={submit} /> }
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4 col-12 h-100 w-100 m-0 p-0 d-flex justify-content-center align-items-center">

                        <div style={{ border: "2px solid red", margin: "5px" }}>
                            <ins className="adsbygoogle"
                                style={{ display: "block", minHeight: "300px", minWidth: "300px", textAlign: 'center' }}
                                data-ad-client="ca-pub-8683834154321399"
                                data-ad-slot="1283171240"
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                                data-adtest="on"
                            ></ins>
                        </div>
                    </div>

                </div>


            </section>

        </>
    );
}

export default Welcome;