import React from 'react' ;
import {FillButton,FillInput,FillLabel,FillButtonLink} from './Extra';
function ForgetPassword(props){

    return (

        <>
        <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">

            <div className="card-box">
                <div>
                    <FillLabel color="#6A097D" name="Email or Number" />
                    <FillInput />
                </div>

                <div>
                    <FillButtonLink click={props.register} color="#6A097D" name="create new account" />
                    <FillButtonLink click={props.login} color="#6A097D" name="Back to login" />
                 
                    <FillButton name="reset"  margin="5px 0" bg="#6A097D" color="#F1D4D4" />
                    


                </div>
            </div>
        </div>
    </>


    );

}

export default ForgetPassword;