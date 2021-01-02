import React,{useState,useEffect} from "react";
import moment from "moment";
const CreateContent=()=>{

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [banner,setBanner]=useState("");
    const [blogType,setBlogType]=useState("");
    const [Img,setImg]=useState("");
    const [YourLink,setYourLink]=useState("");
    const [ImgLink,setImgLink]=useState("");
    const [readTime,setReadTime]=useState("");
    useEffect(()=>{
        
          outFunc();

    },[])
    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }
    const Submit= async ()=>{
        
        const url="http://localhost:5000/admin/dashboard/editor";
        const time=moment().format('MMMM Do YYYY, h:mm:ss a');
        
        try{
            fetch(url,{
                method:"POST",
                credentials:"include",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify({
                    title,
                    description,
                    blogType,
                    time,
                    readTime
                    
                })
            }).then(res =>res.json())
            .then(data=>{
                if(data.info){
                    console.log(data.datas);
                    document.querySelector(".flash").style.height="35px";
                    document.querySelector(".flash h3").style.display="block";
                    document.querySelector(".flash h3").innerHTML="Post Created Sir"
                    setTimeout(
                        ()=>{
                            document.querySelector(".flash").style.height="0px";
                            document.querySelector(".flash h3").style.display="none";
                        }
                        ,3000)
                }else{
                    alert("expired please login again");
                    window.location.reload();
                }
            })
            .catch(err=>{
                
                console.log("error",err);
                
            })
        }
        catch(err){
            if(err){
                
                window.location.reload();
            }
        }
    }

    // const uploadNative=()=>{
    //     const filedata=new FormData();
    //     filedata.append("file",nativeImg);
    //     filedata.append("upload_preset","benven");
    //     filedata.append("cloud_name","jitul-teron");
    //     fetch("https://api.cloudinary.com/v1_1/jitul-teron/image/upload",{
    //       method:"post",
    //       body:filedata
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setNativeUrl(data.url);
    //       console.log(data.url);
    //     })
    //     .catch(err=>{
    //       console.log("eoor ",err);
    //     })
    // }    
    const UploadImg=()=>{
            const filedata=new FormData();
        if(ImgLink!=""){
            filedata.append("file",ImgLink);
            filedata.append("upload_preset","benven");
            filedata.append("cloud_name","jitul-teron");

            fetch("https://api.cloudinary.com/v1_1/jitul-teron/image/upload",{
                method:"post",
                body:filedata,
            }).then(res=>res.json())
            .then(data=>{
                
                setYourLink(data.url)
            }).catch(err=>{
                console.log(err);
            })
        }else{
            alert("Please select before uploading");
        }

        }
    const Copy=()=>{
        const clickMe=document.querySelector(".linklink");
        // web
        clickMe.select();
        // mobile
        clickMe.setSelectionRange(0, 99999);
        document.execCommand("copy");
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Link Copied" ;
        

    }
    return(
        <>
            <div className="editor">
                    
                    <header>
                        <h1>Editor</h1> 
                        
                    </header>                           
                    <div className="write-here">
                            <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" placeholder="Topic name " />
                            <input onChange={(e)=>{setBanner(e.target.value)}} value={banner} type="text" placeholder="banner pic Link" />
                            <input onChange={(e)=>{setReadTime(e.target.value)}} value={readTime} type="text" placeholder="Reading time" />
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
                            <div className="imglink">
                                <input placeholder="link of the image"  type="file" onChange={(e)=>{setImgLink(e.target.files[0])}} />
                                <button onClick={()=>{UploadImg()}} >upload</button>
                                <div className="linkIs">
                                <span  className="tooltip">Link will be shown after uploading <input onClick={()=>{Copy()}} onMouseOut={()=>{outFunc()}} className="linklink" value={YourLink} type="url" readOnly/><span class="tooltiptext" id="myTooltip">Copy to clipboard</span>  </span>
                                    <div>
                                    (Click in the link to copy)
                                    </div>
                                </div>
                            </div>
                    </div>
                    <center>
                    <button onClick={()=>{Submit()}}>Submit</button>    
                    <button>Reset</button>    
                    </center>  
            </div>

            {/* Jitulteron8 */}
            {/* Ravishankar */}
        </>
     )
}

export default CreateContent;