import React from "react";
import moment from "moment";
const Home =()=>{
    const date='January 1st 2020, 6:15:14 pm';
    return(
        <div className="container">
                <div className="home">
                    <div className="about">
                    <div>
                    <h1>
                        About 
                    </h1>
                    <p>{moment("20191030", "YYYYMMDD").fromNow()}</p>
                    {/* moment('January 1st 2020, 6:15:14 pm','MMMM Do YYYY, h:mm:ss a') */}
                    <p>{ moment(date,'MMMM Do YYYY, h:mm:ss a').format("YYYYMMDD")}</p>
                    <p>Hi my name is Jitul Teron currently pursing Bachlor of Technology fron National Institue if Technology </p>
                    <p>Hi my name is Jitul Teron currently pursing Bachlor of Technology fron National Institue if Technology </p>
                    <p>Hi my name is Jitul Teron currently pursing Bachlor of Technology fron National Institue if Technology </p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/4834899/pexels-photo-4834899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                    </div>
                    </div>
                    <div className="what">
                    <h1>
                        What I do 
                    </h1>
                    <p>I am a <span>Full Stack Developer ,</span><span>build web applications ,cli utilities ,libaries</span> and <span>modules.</span>  </p>
                    
                    </div>
                    <div className="extras">
                    <h1>
                        Extras
                    </h1>
                        <p>Currently going through Mechine Learning and AI. In beginner stage. 
                        </p>
                        <p>Recently working with mathamatical softwares like Matlab ,(ask maina dada) and CAD software like SolidWorks.
                        </p>
                    </div>
                    <div className="visit">
                        <h1>Go though My</h1>
                        <p>
                        <span>Blogs</span>, I write on various tech and civic related topics.  
                        </p>
                        <p>
                        <span>Github</span> for open source collaboration.<i className="fas fa-heart"></i>
                        </p>
                        <p>
                        <span>Contact Me</span> for development projects.
                        </p>
                    </div>
                </div>
        </div>
        )
}

export default Home;