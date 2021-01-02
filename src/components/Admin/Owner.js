import React,{useEffect,useState,useContext} from 'react';
import {Link,useHistory} from "react-router-dom";
import {AdminContext} from "../../App"
const Owner=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
   
    const {state,dispatch}=useContext(AdminContext);
    const History=useHistory()
    useEffect(()=>{
        ShowPassword();
        
        if(state){

          History.push("/admin/dash");
        }

    },[state]);
    const ShowPassword=()=>{
        document.querySelector(".adminContent .check").addEventListener("click",()=>{
            // document.querySelector(".adminContent .password").type="text";
            if(document.querySelector(".adminContent .password").type=="text"){
                document.querySelector(".adminContent .password").type="password";
            }else{
                document.querySelector(".adminContent .password").type="text";
            }
        })
    }

    const Login=()=>{
      
        const url ="http://localhost:5000/admin/owner/login";
    
        fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
                username:username,
                password:password  
            })
        }).then(res=> res.json())
          .then(data=>{
         
              if(data){
                  console.log(data);
                localStorage.setItem("loggedIn",true);
                localStorage.setItem("admin",JSON.stringify(data)); 
                dispatch({type:"owner",payload:data});
                History.push('/admin/dash');

              }else{
                  console.log("invalid input");
              }
        
          })
        .catch(err=>{
            console.log(err);
        });
    }
    return(<>
        <div className="adminContainer">
                <div className="adminContent">
                    <h1>Owner Login</h1>
                    <input onChange={(e)=>{setUsername(e.target.value)}} value={username} autoComplete="chrome-off" type="text" placeholder="username" />
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} autoComplete="chrome-off" className="password" type="password" placeholder="password" />
                    <input className="check" type ="checkbox" />
                    <label >Show Password</label>
                    <br/>
                    <button onClick={()=>{Login()}}>Login</button>
                    <Link to="/admin/login/moderator">Login as Moderator</Link>
                </div>
        </div>
    </>)
}
export default Owner;