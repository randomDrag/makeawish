import React from 'react';
import {FillButton,FillInput,FillLabel,FillButtonLink} from './Extra';

import '../css/register.css';

function registerCard (){


    return (

       
        
        <>
            <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">

                <div className="card-box1">
                    <div className="card-Name">
                        <h6>register</h6>
                    </div>
                    <div>
                        <FillLabel color="#6A097D" name="Mobile number" />
                        <FillInput />
                    </div>

                    <div>
                      

                        <FillButton name="Next" margin="20px 0" bg="#6A097D" color="#F1D4D4" />

                        <FillButtonLink color="#6A097D"  name="back to login" />
                    </div>
                </div>
            </div>
        </>        
        
        
      
    )


}

export default registerCard;