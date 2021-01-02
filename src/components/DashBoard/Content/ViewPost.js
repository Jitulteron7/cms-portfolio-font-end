import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
const ViewContent=()=>{
    const {paramID}=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        // console.log(paramID);
        fetch("http://localhost:5000/oneContent/view",{
            method:"post",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                id:paramID
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data){
                setData(data.info);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <>
                <h1>{data.title}</h1>
                <img src={data.banner} />
                <div dangerouslySetInnerHTML={{__html:data.sanitizedHTML}} />
        </>
    )
};

export default ViewContent;