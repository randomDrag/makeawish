
import React ,{useState} from 'react';
import { api } from '../../utils/api';
import { useHistory } from 'react-router-dom';
import { FillButton, FillInput, FillLabel, FillAlert } from '../Extra';
import Loading from '../Loading';

function Adminlogin(){

    const his = useHistory();

    const [Fields, setFields] = useState({

        Email: "",
        Password: ""

    });

    const [alertBox, setAlertBox] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    function HandelChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        setFields((preval) => {


            if (name === 'Email') {
                return {
                    Email: value,
                    Password: preval.Password
                }


            } else if (name === 'Password') {
                return {
                    Email: preval.Email,
                    Password: value,

                }

            }
        });


    }

    async function submit() {
        setisLoading(true);
        await api.post("/admin/login", {
            Email: Fields.Email,
            Password: Fields.Password
        }).then((docs) => {

          
            if (docs.data.msg) {

                setisLoading(false);

                his.push("/admindb");

            } else {
                setisLoading(false);
                his.push("/AAL");

            }
        }).catch((e)=>{
            setisLoading(false);
            setAlertBox(null);
            setAlertBox(
                <FillAlert top="10%" right="10%" heading="Fill input " info="please try to login or use differnt account" />
            )
        })
    }

    return (
    
        <section className="w-100 vh-100 p-0 m-0 login-section" >

<div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">
           
                <div className="card-box">
                    <div>
                        <FillLabel color="#6A097D" name="Email" />
                        <FillInput type="email" change={HandelChange} name="Email" value={Fields.Email} />
                    </div>
                    <div>
                        <FillLabel color="#6A097D" name="password" />
                        <FillInput change={HandelChange} type="password" name="Password" value={Fields.Password} />
                    </div>

                    <div>
                        

                        {isLoading ? <Loading/> : <FillButton name="login"  margin="15px 0" bg="#6A097D" color="#F1D4D4" click={submit} />}
                      
                    </div>
                </div>
            </div>

      

      </section>

    )


}

export default Adminlogin;