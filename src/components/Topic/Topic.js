import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
const Home =()=>{
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
            console.log(data.message);
            if(data){
                setData(data.info);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div className="container-topic">
                <div className="topic">
                   <h1>
                        {data.title}
                        <br/>
                       {/* My Topic Is Here please have a look.This looks amazng and awasome and wonderfull */}
                   </h1>
                   <div class="time">
                   <p>By {data.author}</p> 
                   <p>{data.time}</p></div>
                   <img src={"https://raw.githubusercontent.com/deepjyoti30/blog-static-content/master/content/redesigned-blog.jpg"}/>
                   <div className="content">
                        {/* <p>
                        I have had a <a href="https://google.com">personal blog</a> for a while now. I had written a few posts there but it was far from perfect. It was built using basic HTML, CSS and JS. I had seen all this awesome sites with unique designs and I thought, why not create my own?

                        I went with a front-end for back-end approach which means the back-end needed to be robust in order for the content to load properly and fast.

                        I built my API using FastAPI for Python and the webapp using VueJS.
                        </p>
                        <h2 >
                        Building the API
                        </h2>
                        <h3>
                        Structering the API
                        </h3>
                        <p>Here are some of the list to test the style of the list in this page</p>
                        <ul>
                            <li>Allow GET, POST, UPDATE, DELETE where only GET will be public and other methods </li>
                            <li> Allow POST, DELETE where only POST will be public.</li>
                            <li>/related: Allow GET to get the related posts to a post.</li>
                        </ul>
                        <p>
                        I laid down the endpoints that will possibly be needed in order for the blog to work properly.

                        Here are some of them
                        </p>
                        <p>
                        I laid down the endpoints that will possibly be needed in order for the blog to work properly.

                        Here are some of them
                        </p>
                        <h2>
                            Implementing the API
                        </h2>
                        <p>
                        It took me a few days to get the API ready. FastAPI was really helpful with their openapi docs to provide a nice interface in order to test the API without using curl.

                        The posts and the subscribe endpoint are pretty self explanatory, here's how I created the related endpoint.
                        </p>
                        <h2>
                        What about SEO?
                        </h2>
                        <p>
                        Well yeah, I know SEO is important. For loading the meta tags I used vue-head which renders the meta tags dynamically after the post is loaded using the API.

This is pretty important since the meta tags are used by all the bots crawling the page. Also, Google bots are now able to crawl dynamically rendered content whcih means it should not be an issue if the tags are loaded dynamically using JS.
                        </p> */}
                        <div  dangerouslySetInnerHTML={{__html:data.sanitizedHTML}} />
                   </div>
                </div>
        </div>
        )
}

export default Home;