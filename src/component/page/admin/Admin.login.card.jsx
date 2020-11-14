import React ,{useState} from 'react';
import Loading from '../../Loading';
import { useHistory } from 'react-router-dom';


import { FillButton, FillInput, FillLabel, FillAlert } from '../../Extra';
import { api } from '../../../utils/api';
function Alogin(props){

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
        await api.post(props.apivalue,{Email: Fields.Email, Password: Fields.Password}).then((docs) => {

          
            if (docs.data.msg) {
                setisLoading(false);
                his.push(props.sec);


            } else {
                setisLoading(false);
                his.push(props.history);

            }
        }).catch((e)=>{
            console.log(e.message);
            setisLoading(false);
            setAlertBox(null);
            setAlertBox(
                <FillAlert top="10%" right="10%" heading="Fill input " info="please try to login or use differnt account" />
            )
        })
    }

    return(
        <>
        <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">
        {alertBox}
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

                    {isLoading ? <Loading/> : <FillButton name={props.name} click={submit} margin="10px 0" bg="#6A097D" color="#F1D4D4" />}
                   

                </div>
            </div>
        </div>
    </>

);
    
}

export default Alogin;