import React,{useEffect,useState} from "react";
import {Link, useHistory} from "react-router-dom";
import moment from "moment";
const Blog =()=>{
const [info,setInfo]=useState([]);
const History=useHistory();
 useEffect(()=>{

        // fetch

        fetch("http://localhost:5000/admin/dashboard/allcontents",{
            method:"GET",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(data=>{
                if(data){
                    setInfo(data.data);
                }
        }).catch(err=>{
            console.log("blog content error ",err);
        })

        form();
        buttonBigger1();
        buttonBigger();

    },[info]);


       const form=()=>{
        const point=document.getElementById("open");
        point.addEventListener("click",(e)=>{
            const modal=document.querySelector('.modal');
            modal.style.display="block";
        })

        const close=document.querySelector(".close");
        close.addEventListener("click",(e)=>{
            const modal=document.querySelector('.modal');
            modal.style.display="none";
        })
        const modalGlobal = document.querySelector('.modal');
        const touch = document.querySelector('.inside');
        window.onclick = function(event) {
            if (event.target == touch) {
                
                modalGlobal.style.display ="none";
            }
        }
       }
        
    const buttonBigger1=()=>{
        const button=document.querySelector(".biggers1");
        let toggle=false;
        
       
        button.addEventListener("click",()=>{
            
            if(window.innerWidth<=760){
            if(!toggle){
                document.querySelector(".biggers1 ul").style.height ="auto"; 
                document.querySelector(".search").style.marginTop ="12px"; 
                document.querySelector(".biggers1 ul").style.padding="10px 0px"; 
                document.querySelector(".innerwrapper1").style.gridTemplateRows="repeat(3,auto)";
                document.querySelector(".innerwrapper1 .biggers1 h3").style.setProperty("--blackColor","orange");
                toggle=true;
            }
            else{
                document.querySelector(".innerwrapper1 .biggers1").style.alignItems="flex-start";
                document.querySelector(".innerwrapper1 .biggers1 h3").style.setProperty("--blackColor","unset");
                document.querySelector(".biggers1 ul").style.height="0px";
                document.querySelector(".biggers1 ul").style.padding="0px 0px"; 
                toggle=false;
            }
          
            }
        })
       
    }
    const buttonBigger=()=>{
        const button=document.querySelector(".biggers");
        let toggle=false;
        
        button.addEventListener("click",()=>{
            if(window.innerWidth<=760){
            if(!toggle){
                document.querySelector(".search").style.marginTop ="12px"; 
                document.querySelector(".biggers ol").style.height ="auto"; 
                document.querySelector(".biggers ol").style.padding="10px 0px"; 
                document.querySelector(".innerwrapper1 .biggers h3").style.setProperty("--blackColor","orange");
                document.querySelector(".innerwrapper1").style.gridTemplateRows="repeat(3,auto)";
                toggle=true;
            }
            else{
                
                document.querySelector(".innerwrapper1 .biggers h3").style.setProperty("--blackColor","unset");
                document.querySelector(".innerwrapper1 .biggers").style.alignItems="flex-start";
                document.querySelector(".biggers ol").style.height="0px";
                document.querySelector(".biggers ol").style.padding="0px 0px"; 
                toggle=false;
            }
          
        }
        })
    }
    return(<>
     <nav className="nav2">
                       <a className="logo">Blog</a>
                       <ul>
                       {/* 2.0 */}
                           {/* <li><a>Write blog</a></li> */}
                           
                           <li id="open" style={{cursor:"pointer"}} ><a >Topic you want</a></li>
                           
                       </ul> 
     </nav>

        <div className="container-inner">
            <div className="Outterwrapper">
                <div className="innerwrapper1">
                    <div  >
                        <div className="search">
                            <input type="search" placeholder="search..."/>
                            <button ><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div  className="biggers1">
                        <div className="card">
                                <h3>categories</h3>
                                <ul>
                                <Link to="/ml"><li>AI / ML</li></Link>
                                <Link to="/ml"><li>Developer</li></Link>
                                <Link to="/ml"><li>Mechanical</li></Link>
                                <Link to="/ml"><li>Commerce</li></Link>
                                <Link to="/ml"><li>Fitness</li></Link>
                                <Link to="/ml"><li>Extras</li></Link>
                                </ul>
                        </div>
                    </div>
                    <div  className="biggers">
                        <div className="card bigger">
                            <h3>Top Posts</h3>
                                <ol type="1">
                                    <li>
                                       
                                    <span>
                                       <Link>
                                       <h3>AI / ML</h3>
                                        <p>
                                        asdkjaslkjdb alsdajlksd aldn ljnad lsldka
                                        </p>
                                        </Link>
                                   </span>
                                       
                                    </li>
                                    <li>
                                    <span>
                                       <h3>AI / ML</h3>
                                        <p>
                                        asdkjaslkjdb alsdajlksd aldn ljnad lsldka
                                        </p>
                                       </span>
                                    </li>
                                    <li>
                                    <span>
                                       <h3>AI / ML</h3>
                                        <p>
                                        asdkjaslkjdb alsdajlksd aldn ljnad lsldka
                                        </p>
                                       </span>
                                    </li>
                                    <li>
                                    <span>
                                       <h3>AI / ML</h3>
                                        <p>
                                        asdkjaslkjdb alsdajlksd aldn ljnad lsldka
                                        </p>
                                       </span>
                                       </li>
                                    <li><span>
                                       <h3>AI / ML</h3>
                                        <p>
                                        asdkjaslkjdb alsdajlksd aldn ljnad lsldka
                                        </p>
                                       </span>
                                       </li>
                                    
                                </ol>
                        </div>
                    </div>
                    {/* <div className="pagination">
                            <a>&#9664;</a>
                            <a>2</a>
                            <a>3</a>
                            <a>&#9658;</a>
                        </div> */}
                </div>
                <div className="scroll">
                <div  className="innerwrapper2">
                        <div className="scrollHere">
                        {
                            info.map(data=>{
                                return(
                                    <>
                                    {
                                        <>
                                        <div onClick={()=>{History.push("/blog/contentno/"+data._id)}} className="card-shade">
                                                <img src={data.banner} />
                                                <div className="content">
                                                    <ul>
                                                    <li className="blogListNew"><span>{data.time}</span>
                                                    <span>{data.readTime} min</span></li>
                                                    <li>
                                                    <h4>{data.title}</h4>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <div dangerouslySetInnerHTML={{__html:data.sanitizedHTML.substring(0,240)+" ..."}} />
                                                        </p>
                                                    </li>
                                                    <li className="blogPastPresent">
                                                        {moment(data.time,' h:mm a - MMM D, YYYY').fromNow()}
                                                    </li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div onClick={()=>{History.push("/blog/contentno/"+data._id)}} className="card-shade">
                                                <img src={data.banner} />
                                                <div className="content">
                                                    <ul>
                                                    <li className="blogListNew"><span>{data.time}</span>
                                                    <span>{data.readTime} min</span></li>
                                                    <li>
                                                    <h4>{data.title}</h4>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <div dangerouslySetInnerHTML={{__html:data.sanitizedHTML.substring(0,200)+" ..."}} />
                                                        </p>
                                                    </li>
                                                    <li className="blogPastPresent">
                                                        {moment(data.time,' h:mm a - MMM D, YYYY').fromNow()}
                                                    </li>
                                                    </ul>
                                                </div>
                                        </div>
                                        </>
                                    
                                    }
                                    </>
                                )
                            })
                        }
                        </div>
                        {/* {
                            info.map(data=>{
                                return(
                                    <>
                                    {
                                        <div className="card-shade">
                                                <img src={data.banner} />
                                                <div className="content">
                                                    <ul>
                                                    <li><span>8th oct 2020</span></li>
                                                    <li>
                                                    <h4>{data.title}</h4>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <div dangerouslySetInnerHTML={{__html:data.sanitizedHTML.substring(0,200)+" ..."}} />
                                                        </p>
                                                    </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    
                                    }
                                    </>
                                )
                            })
                        } */}
                        {/* <div className="card-shade">
                        <img src="https://images.pexels.com/photos/4834899/pexels-photo-4834899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                <div className="content">
                                    <ul>
                                    <li><span>8th oct 2020</span></li>
                                    <li>
                                    <h4>This is my first post and I am very happy yes yes and yo man</h4>
                                    </li>
                                    <li>
                                    <p>This is my first post and I am very happy yes yes and yo man.
                                    This is my first post and I am very happy yes yes and yo man</p>
                                    </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="card-shade">
                        <img src="https://images.pexels.com/photos/4834899/pexels-photo-4834899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                <div className="content">
                                    <ul>
                                    <li><span>8th oct 2020</span></li>
                                    <li>
                                    <h4>This is my first post and I am very happy yes yes and yo man</h4>
                                    </li>
                                    <li>
                                    <p>This is my first post and I am very happy yes yes and yo man.
                                    This is my first post and I am very happy yes yes and yo man</p>
                                    </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="card-shade">
                        <img src="https://images.pexels.com/photos/4834899/pexels-photo-4834899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                <div className="content">
                                    <ul>
                                    <li><span>8th oct 2020</span></li>
                                    <li>
                                    <h4>This is my first post and I am very happy yes yes and yo man</h4>
                                    </li>
                                    <li>
                                    <p>This is my first post and I am very happy yes yes and yo man.
                                    This is my first post and I am very happy yes yes and yo man</p>
                                    </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="card-shade">
                        <img src="https://images.pexels.com/photos/4834899/pexels-photo-4834899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                <div className="content">
                                    <ul>
                                    <li><span>8th oct 2020</span></li>
                                    <li>
                                    <h4>This is my first post and I am very happy yes yes and yo man</h4>
                                    </li>
                                    <li>
                                    <p>This is my first post and I am very happy yes yes and yo man.
                                    This is my first post and I am very happy yes yes and yo man</p>
                                    </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="card-shade">
                        <img src="https://images.pexels.com/photos/4834899/pexels-photo-4834899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                <div className="content">
                                    <ul>
                                    <li><span>8th oct 2020</span></li>
                                    <li>
                                    <h4>This is my first post and I am very happy yes yes and yo man</h4>
                                    </li>
                                    <li>
                                    <p>This is my first post and I am very happy yes yes and yo man.
                                    This is my first post and I am very happy yes yes and yo man</p>
                                    </li>
                                    </ul>
                                </div>
                        </div> */}
                    
                </div>
            </div>
            </div>
        </div>
        <div id="modal" className="modal">
                <div className="inside ">
                        <form  className="animate">
                            <i className="close">&times;</i>
                            <h1>Send my the topic you want to read about </h1>
                            <input type="text" placeholder="name of the topic"/>
                            <input type="email" placeholder="your email id"/>
                            <button type="submit">Sumit</button>

                        </form>
                </div>
        </div>
        </>
        )
}

export default Blog;