import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
const ContentEdit=()=>{
    const {editID}=useParams()
    const [data,setData]=useState({});
    const [title,setTitle]=useState({});
    const [banner,setBanner]=useState({});
    const [blogType,setBlogType]=useState({});
    const [description,setDescription]=useState({});
    
    useEffect(() => {
        fetch("http://localhost:5000/oneContent/view",{
            method:"post",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                id:editID
            })
        }).then(res=>res.json())
        .then(datas=>{
            setData(datas);
            setTitle(datas.info.title)
            setBanner(datas.info.banner)
            setBlogType(datas.info.blogType)
            // setTitle(datas.info.title)
            setDescription(datas.info.description)
            
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const Submit=(id)=>{
        

            const url="http://localhost:5000/admin/dashboard/edit/content";
            fetch(url,{
                method:"post",
                credentials:"include",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    id:id,
                    description,
                    banner,
                    blogType,
                    title
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.data){
                        alert("updated")
                        console.log("yoyo");
                }else{
                    alert("expired please login again");
                    window.location.reload();
                }
            })
            .catch(err=>{
                console.log(err);
            })
    
        
    }
    return (
        <>
        <div className="editor">
                    
                    <header>
                        <h1>Editor</h1> 
                        
                    </header>                           
                    <div className="write-here">
                            <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" placeholder="Topic name " />
                            <input onChange={(e)=>{setBanner(e.target.value)}} value={banner} type="text" placeholder="banner pic Link" />
                            <select onChange={(e)=>{setBlogType(e.target.value)}} value={blogType} >
                                <option>Webdevelopment</option>
                                <option>AI/ML</option>
                                <option>Mechanical</option>
                                <option>Electronics</option>
                                <option>Others</option>
                            </select>
                            <textarea onChange={(e)=>{setDescription(e.target.value)}} value={description} placeholder="write here Markdown language" 
                            >
                            </textarea>  
                            
                    </div>
                    <center>
                    <button onClick={()=>{Submit(editID)}} >Submit</button>    
                    <button>Reset</button>    
                    </center>  
            </div>
        </>
        )
}

export default ContentEdit;