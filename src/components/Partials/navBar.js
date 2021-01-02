import React,{useEffect,useState} from "react";

import {Link} from "react-router-dom";

const Navbar=(props)=>{
    
    useEffect(()=>{
     
        if(localStorage.getItem("theme")==null){
            
                localStorage.setItem("theme","light");
            
        }
        menuBtn();
        themeToggle();
        themeModeCheck();
        
    },[])
    
    const menuBtn=()=>{
        
        const openME=document.querySelector(".openME");
        let menuToggle=false;
        openME.addEventListener("click",()=>{
            
            if(!menuToggle){
                
                openME.classList.add("open");
                openME.style.zIndex=10;
                
                menuToggle=true;         
                
                document.querySelector(".nav-container").style.display="block";  
                setTimeout(()=>{
                    document.querySelector(".nav1").style.transform="translateX(0px)"        
                },300);
              
         
       
            }
            else if(menuToggle){
               
                openME.classList.remove("open");
                menuToggle=false;    
                
                
                document.querySelector(".nav1").style.transform="translateX(-500px)"
                
                setTimeout(()=>{
                    document.querySelector(".nav-container").style.display="none";
                },300);
            
            }
            
        })
        
    }


    const themeToggle=()=>{
     
     const mode=document.querySelector(".toggleTheme");
    mode.addEventListener("click",()=>{
        let toggle=localStorage.getItem("theme");
        if(toggle=="light"){
            localStorage.setItem("theme","dark");
            themeModeCheck();
        }
        else{
            
           localStorage.setItem("theme","light");
           themeModeCheck();
        }
     })
     
        
    }
    const themeModeCheck=()=>{
        
        if(localStorage.getItem("theme")=="dark"){
    
            document.body.style.setProperty("--backgroundColor","#424242");
            document.body.style.setProperty("--blackColor","#fff");
            document.body.style.setProperty("--whiteColor","#000");
            document.body.style.setProperty("--navbarBColor","rgb(74, 74, 74)");
            // document.body.style.setProperty("--lightestTextColor","#9a9797");
            document.body.style.setProperty("--TextColor","#366b87");
            document.body.style.setProperty("--TextColor2","#366b87");
            
            document.querySelector(".toggleTheme i").classList.add("fa-moon");
            document.querySelector(".toggleTheme i").classList.remove("fa-sun");

        }
        else if(localStorage.getItem("theme")=="light"){
            
            document.body.style.setProperty("--backgroundColor","#eee");
            document.body.style.setProperty("--blackColor","#000");
            document.body.style.setProperty("--whiteColor","#fff");
            document.body.style.setProperty("--navbarBColor","#fff");
            document.querySelector(".toggleTheme i").classList.add("fa-sun");
            document.querySelector(".toggleTheme i").classList.remove("fa-moon");
            // document.body.style.setProperty("--lightestTextColor","unset");
            document.body.style.setProperty("--TextColor","unset");
            document.body.style.setProperty("--TextColor2","unset");
            
            
        }

    }

    return( 
        <>  
            <div className="menuContainer">
            <div className="openME ">
                   <div className="bar"></div>
               </div>
            </div>
                
               <div className="nav-container">
               
                    <nav className="nav1">
                    {/* <Link to="/">Technologies</Link> */}
                    <Link to="/">Technologies</Link>
                    
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/works">My Works</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/contact">Contact me </Link></li>
                            {/* <li>Blogs</li>
                            <li>My works</li>
                            <li>Contact Me</li> */}
                            <li><div className="toggleTheme">
                                {/* <i class="far fa-moon"></i> */}
                                <i class="fas fa-sun"></i>
                            </div></li>
                        </ul>
                    </nav>

               </div>
               </>

         )
}

export default Navbar;