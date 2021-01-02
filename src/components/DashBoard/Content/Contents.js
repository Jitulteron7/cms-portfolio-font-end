import React,{useState,useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import moment from "moment";
const Contents=()=>{
    const [content,setContent]=useState([]);
    
    const History=useHistory();
    useEffect(()=>{
        const url="http://localhost:5000/admin/dashboard/allcontents";
        fetch(url,{
            method:"get",
            credentials:"include"
        }).then(res=>res.json())
        .then(data=>{
            
                if(data){
                    setContent(data.data);
                    // console.log(data.data);
                }
        })
        .catch(err=>{
            console.log(err);
        })
        
    },[content]);
    const Delete=(id)=>{
        const url="http://localhost:5000/admin/dashboard/delete/content";
        fetch(url,{
            method:"post",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                id:id
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.data){
                    alert("yo deleted")
            }
        })

    }
    const Edit=(id)=>{
        History.push("/admin/dash/content/edit"+id);

    }
    return(<>
            <div className="allContents">
            <input placeholder="search" />
                
                {content.map(info=>{
                    return(
            
                        <div className="content">
                        <div onClick={()=>{History.push("/blog/contentno/"+info._id)}} id="contentView">
                            <img src={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
                            <div className="write">
                            <h6>{moment(info.time,' h:mm a - MMM D, YYYY').fromNow()} </h6>
                                <h5>{info.title.substring(0,50)+" ..."}</h5>
                                
                                <h6>{info.readTime} min content</h6>
                                <div dangerouslySetInnerHTML={{__html:info.sanitizedHTML.substring(0,300)+" ..."}}  />
                            </div>
                            
                        </div>
                            <div>
                                <button onClick={()=>{Delete(info._id)}} >Delete</button>
                                <button onClick={()=>{Edit(info._id)}} >Edit</button>
                            </div>
                        </div>
                        )
                })}
            
                    
                
                
            </div>
    </>)
}


export default Contents;

