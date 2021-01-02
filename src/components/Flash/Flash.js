import React,{useEffect} from "react";

const Flash=(props)=>{
    useEffect(() => {
        document.querySelector(".flash").addEventListener("click",()=>{
            document.querySelector(".flash").style.height="35px";
            document.querySelector(".flash h3").style.display="block";
            setTimeout(
                ()=>{
                    document.querySelector(".flash").style.height="0px";
                    document.querySelector(".flash h3").style.display="none";
                }
                ,3000)
            })
    },[])
    return(
        <>
            <div className="flash">
                            <h3></h3>
            </div>
        </>
        )
}

export default Flash;