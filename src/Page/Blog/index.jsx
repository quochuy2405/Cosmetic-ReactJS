import React from "react";
import Anhdep from "../../components/AnhDep";
import Header from "../../components/Header";

function Blog() {
  return (
    <div className="Blog">
      <Header />
      <div className="body_Page">
      <iframe style={{display:"block",width:"60%",margin:"20px auto",lineHeight:"34px",border:"3px solid white",borderRadius:"30px"}} height="600" src="https://www.youtube.com/embed/3xpDieiXbAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe style={{display:"block",width:"60%",margin:"20px auto",lineHeight:"34px",border:"3px solid white",borderRadius:"30px"}} height="600" src="https://www.youtube.com/embed/OBSJb-3feDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Anhdep />
      </div>
    </div>
  );
}

export default Blog;
