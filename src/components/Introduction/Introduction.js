import  "./Introduction.css";
import introimg from "./introimg.jpg";
import moutain_behind from "./mountains_behind.png";
import moutain_front from "./mountains_front.png";
import stars from "./stars.png";
import ghosblade from "./ghostblade.mp4";
import React,{useEffect,useRef} from 'react';
function scrollView1(){
  document.getElementById('About').scrollIntoView({behavior:'smooth'});
}
function Introduction() {
  useEffect(()=>{
    function handleScroll(e){
      const value=window.scrollY;
      const stars=document.getElementById('stars');
      const moon=document.getElementById('moon');
      let mountains_behind=document.getElementById('mountains_behind');
      let text=document.getElementById('text');
      let btn=document.getElementById('btn');
      let mountains_front=document.getElementById('mountains_front');
      text.style.marginTop=value+'px';
      text.style.marginRight=value*0.5+'px';
      btn.style.marginTop=value*0.7+'px';
      stars.style.left=value*0.25+'px';
      moon.style.top=value*1.05+'px';
      mountains_behind.style.top=value*0.1+'px';
      if(window.scrollY>400){
        document.getElementById('transition0').style.background='linear-gradient(to top, blanchedalmond,transparent)';

      }else{
        document.getElementById('transition0').style.background='linear-gradient(to top, #2b1055,transparent)';

      }

    }
    window.addEventListener("scroll",handleScroll,{passive:true});
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);
    return (
      <div>
          <div id="Introduction" >
            <video  loop autoPlay muted id='mountains_behind'>
              <source src={ghosblade} type="video/mp4"/>
            </video>
            <h2 id="text">PORTFOLIO</h2>
            <a id="btn" onClick={scrollView1}>Explore</a>
            <img src={stars} id='stars' alt =''/>

          </div>
          <div id='transition0'>

          </div>
      </div>
      
    );
  }
  
  export default Introduction;