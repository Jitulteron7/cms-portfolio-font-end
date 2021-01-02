import React,{useEffect,useContext, useState} from "react";
import { Link,useHistory} from "react-router-dom";
import CreateContent from "./Content/ContentCreate";
import Flash from "../Flash/Flash";
import {AdminContext} from "../../App";
import AuthFun from "../Auth/AuthFun";


const Dashboard=(props)=>{
    const {state,dispatch}=useContext(AdminContext);
    const [stateIs,SetState]=useState({})
    // const History=useHistory();
    // useEffect(()=>{
    //         // must controles
            
    //             // fetch("http://localhost:5000/admin/check/",{
    //             //   method:"get",
    //             //   credentials:"include",
    //             //   headers:{
    //             //     "content-type":"application/json"
    //             //   }
    //             // }).then(res=>res.json())
    //             // .then(data=>{
    //             //   if(data.username){
    //             //     console.log(data.username,"1");
    //             //     dispatch({type:data.username,payload:data})
    //             //   }else{
    //             //       History.push("/");
    //             //   }
    //             // })
    //             // if(AuthFun(History,dispatch)){
    //             //     const data=AuthFun();
    //             //     console.log(data);
    //             // }
            
    //          SetState(props);

    //          DashboardContols()
    //          if(!stateIs==={}){
    //             console.log("logged on");
    //         }
    //         else{
    //             // History.push("/");
                
    //         }

    //  },[stateIs]);

    const History=useHistory()
    useEffect(()=>{
        DashboardContols();
        
        if(state==null){
            History.push("/");
        }
        

    },[state]);
    const DashboardContols=()=>{
         
        document.querySelector(".Profile-admin").addEventListener("click",()=>{
            if(document.querySelector(".profile-options").style.display=="block"){
                document.querySelector(".profile-options").style.display="none";
            }else {
                document.querySelector(".profile-options").style.display="block";
            }
        })
        document.querySelector(".board-content").addEventListener("click",()=>{
            document.querySelector(".profile-options").style.display="none"
        })
        document.querySelector(".Profile-admin img").addEventListener("mouseover",()=>{
            document.querySelector(".profile-options").style.display="block"
        });
        
        document.querySelector(".profile-options").addEventListener("mouseover",()=>{
            document.querySelector(".profile-options").style.display="display"
        })
    }
    const TypeOf=(what)=>{
        if(typeof(what)==="string"){
            return(<div className="contentIs">
                    <div>
                        {what}
                    </div>
            </div>)
        }else{
            return(
                what
            );
        }
        
    }
    const Logout=()=>{
        fetch("http://localhost:5000/admin/logout",{
            method:"get",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then(res=>res.json())
        .then(data=>{
                if(data){
                    localStorage.clear("loggedIn")
                    localStorage.clear("admin")
                    History.push("/")
                }else{
                    console.log("unable to logout");
                }
        })
        .catch(err=>{
            console.log(err);
        });
    }
    return(
        <>  
            <Flash  />                        
            <div className="dashboard-container">
                        
                        
                <div className="options">
                        <div className="controllers">
                            <h1 onClick={()=>{History.push("/")}}>Technology</h1>
                            <ul>
                                <li><Link to="/admin/dash/content/create"><i class="fas fa-feather-alt"></i> Write Blog</Link></li>
                                <li><Link to="/admin/dash/content/edit"><i class="fas fa-file-signature"></i>Create Admin</Link></li>
                                <li><Link to="content"><i class="fas fa-user-minus"></i>Delete Admin</Link></li>
                                <li><Link to="/admin/dash/content/view" ><i class="fas fa-folder-open"></i>Contents</Link></li>
                            
                            </ul>
                        </div>
                        
                        <div className="Profile-admin">
                                <div className="profile-options">
                                    <ul>
                                        <li><Link><i class="far fa-eye"></i>Profile View</Link></li>
                                        <li><Link><i class="fas fa-cog"></i>Settings</Link></li>
                                        <li onClick={()=>{Logout()}} ><Link><i class="fas fa-sign-out-alt"></i>Logout</Link></li>
                                    </ul>
                                </div>
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <h4>Jitul Teron <span>(Owner)</span> </h4>
                                
                        </div>
                </div>
                <div className="board-content">
                        {TypeOf(props.compo)}
                </div>

            </div>
        </>
        )
};
export default Dashboard;

