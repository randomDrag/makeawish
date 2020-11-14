import React ,{useEffect , useState}from 'react';
import { Route ,Redirect } from "react-router-dom";
import {api} from '../utils/api';




const PrivateMember = ({ component: Component, ...rest }) => {
    const [isAuth , setIsAuth]= useState("false");

    useEffect(()=>{

        fetch();


    },[]);

    let fetch = async ()=>{

        await api.get("/member/isAuth").then((doc)=>{
    
          setIsAuth( doc.data.msg ) ;
          
        }).catch((e)=>{
    
        });

    }

    return (

      <Route
        {...rest}

        
        render={props =>
         
          isAuth ?
            (<Component {...props} />): 
            (<Redirect
              to={{ pathname: "/memberlogin", state: { from: props.location } }}
            />)
          
          
        }
      />
    );
  };

  export default PrivateMember ;