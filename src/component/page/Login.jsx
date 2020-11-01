import React ,{useState , useEffect} from 'react';
import '../../css/login.css';
import LoginCard  from '../Login.card';

import ForgetPassword from '../Forget.password';
import RegisterCard from '../Register.card';

function Login(){


    const [card , setCard] = useState(<LoginId/>);


    useEffect(()=>{


    },[]);


 function LoginId(){
     return(
     <LoginCard forget={()=>{buttonHandel(1)}} register={()=>{buttonHandel(2)}} />
     );
 }


 function buttonHandel(id){

    if(id === 1){
        setCard(<ForgetPassword login={()=>{buttonHandel(3)}} register={()=>{buttonHandel(2)}}/>);
    }else if (id === 2){
        setCard(<RegisterCard />)
    }else if (id === 3){

     setCard(<LoginId/>)
    }

 }



    return(
        <section className="w-100 vh-100 p-0 m-0 login-section" >

          {card}


        

        </section>
    )

}

export default Login;