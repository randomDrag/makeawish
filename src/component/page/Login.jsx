import React ,{useState , useEffect} from 'react';
import '../../css/login.css';
import LoginCard  from '../Login.card';

import ForgetPassword from '../Forget.password';
import RegisterCard from '../Register.card';


function Login(props){

    const [iscard , setiscard]= useState(props.cardtype);

    const [card , setCard] = useState(iscard ? <LoginId/> : <RegisterId/> );


    useEffect(()=>{


    },[]);


 function LoginId(){
     return(
     <LoginCard forget={()=>{buttonHandel(1)}} register={()=>{buttonHandel(2)} } close={props.close}  />
     );
 }

 function RegisterId(){
     return(
    <RegisterCard login={()=>{buttonHandel(3)}} />
     )

 }


 function buttonHandel(id){

    if(id === 1){
        setCard(<ForgetPassword login={()=>{buttonHandel(3)}} register={()=>{buttonHandel(2)}}/>);
    }else if (id === 2){
        setCard(<RegisterId/>)
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