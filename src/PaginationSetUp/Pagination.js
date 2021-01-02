const Display=(Items,List,rows_per_page,current_page,History)=>{
            List.innerHTML="";
            current_page--;
            let start=rows_per_page*page;
            let end=start + rows_per_page;
            let paginationItems=Items.slice(start,end);

            for(let i=0;i<paginationItems.length;i++){
                let item = paginationItems[i];
                // elements
                let div1=document.createElement("div");
                let div2=document.createElement("div");
                let div3=document.createElement("div");
                let div4=document.createElement("div");
                let img=document.createElement("img");
                let ul=document.createElement("ul");
                let li=document.createElement("li");
                let liClass=document.createElement("li");
                let h4=document.createElement("h4");
                let p=document.createElement("p");
                let span=document.createElement("span");
                // class injection
                div1.classList.add("card-shade");
                div2.classList.add("content");
                div4.classList.add("at");
                
                List.appendChild(div)
            }
}