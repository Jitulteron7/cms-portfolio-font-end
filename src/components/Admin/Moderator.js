import React,{useEffect} from 'react';
import {Link} from "react-router-dom"
const Owner=()=>{

    useEffect(()=>{
        document.querySelector(".adminContent .check").addEventListener("click",()=>{
            // document.querySelector(".adminContent .password").type="text";
            if(document.querySelector(".adminContent .password").type=="text"){
                document.querySelector(".adminContent .password").type="password";
            }else{
                document.querySelector(".adminContent .password").type="text";
            }
        })
    },[])
    return(<>
        <div className="adminContainer">
                <div className="adminContent">
                    <h1>Moderator Login</h1>
                    <input autoComplete="off" type="text" placeholder="username" />
                    <input autoComplete="off" className="password" type="password" placeholder="password" />
                    <input className="check" type ="checkbox" />
                    <label >Show Password</label>
                    <br/>
                    <button>Login</button>
                    <Link to="/admin/login/owner">Login as Owner</Link>
                </div>
        </div>
    </>)
}
export default Owner;