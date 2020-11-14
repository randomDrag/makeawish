import React , {useState} from "react";
import { api } from "../../../utils/api";


function Add() {

    const [fields , setFields] = useState({
        Name : "",
        Info : ""

    });
    const [Msg  ,setMsg] = useState("");


function ChangeHandel(event){
            const typeVal =event.target.placeholder;
            const value =event.target.value;
    
            console.log(typeVal);
    setFields((preval)=>{

        if(typeVal === "Name"){
            return {
               Name : value,
                Info : preval.Info
            }
        }else if(typeVal === "Info"){

            return {
                Name : preval.Name,
                 Info : value
             }

        }



    });
}

async function submit(){
    let data ={ QUESTION: fields.Name,
            ANSWER: fields.Info  }


  await api.post("FAQ/create",data).then((res)=>{
      
    if(res.data.msg){

    setMsg(res.data.msg);
    setFields({
        Name : "",
        Info : ""
    });
    
}

  }).catch((e)=>{

    setMsg(e.massage);


  });

  


}


    return (
        <>
        <p style={{textAlign : "center", position:"absolute",left:"50%",color:"RED"}}>{Msg}</p>
    <div style={{margin: "50px 10vw"}} >
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">question</label>
    <input type="text" className="form-control" onChange={ChangeHandel} value={fields.Name} placeholder="Name" required/>
  </div>
  

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Info</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={fields.Info} onChange={ChangeHandel} placeholder="Info" rows="3"></textarea>
  </div>

  <button className="btn btn-primary" type="submit" onClick={submit}>SUBMIT</button>
  </div>
        
       

        </>
    );
}
export default Add;