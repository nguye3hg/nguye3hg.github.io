import  "./About.css";
import React, { useEffect, useState, useRef } from 'react';
import background1 from './background1.jpg';
import human1 from './human1.png';
import human2 from './human2.png';
import tree from './tree.png';
import myComputer from './myComputer.png';
import schedule from './schedule.png';
function About() {
  useEffect(()=>{
    function handleScroll(e){
      const value=window.scrollY;
      const card=document.getElementById("card")
      if ( window.scrollY > 400 && window.scrollY < 500) {
        card.style.background='transparent';
      }else if(window.scrollY>500&&window.scrollY<676){
        card.style.background='white';
        card.style.transform='rotateX('+(90+value-400)+'deg)';
      }else if(window.scrollY>676){
        card.style.transform='none';
      }else{
        card.style.transform='rotateX('+90+'deg)';
      }
      
      if(window.scrollY>400){
        document.getElementById('About').style.backgroundColor='blanchedalmond';
        document.getElementById('horizontalBar').style.background='white';
        document.getElementById('Card').style.background='white';
        document.getElementById('human1').style.display='none';
        document.getElementById('human2').style.display='block';

      }else{
        document.getElementById('About').style.backgroundColor='#2b1055';
        document.getElementById('horizontalBar').style.background='black';
        document.getElementById('Card').style.background='black';
        document.getElementById('human1').style.display='block';
        document.getElementById('human2').style.display='none';
      }
  
      
    }
    window.addEventListener("scroll",handleScroll,{passive:true});
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);
    return (
      <div id="About" >
        
        <div id='secondPart'>
          <div id="horizontalBarContainer">
            <div id="horizontalBar">           
            </div>
          </div>  
          <div id='ABMContainer'>
              
              <div id="card" style={{transform:'rotateX(90deg)'}}>       
                <img src={schedule} alt=''>
                </img>      
              </div>
              <div id='paragraph'>
                <h2 >About Me</h2><br></br>
                <h3> Second-year Computer Science student at UC</h3><br></br>
                <h3> Passionate about website, mobile and blockchain application</h3><br></br>
                <h3> </h3><br></br>

              </div>
          </div>   
          <div id='pictureContainer'>
            <div id='picture'>

              <div id='human'>
                <img src={human1} alt='' id='human1'></img>
                <img src={human2} alt='' id='human2'></img>

              </div>
              <div id='myComputer'>
                <img src={myComputer} alt=''></img>

              </div>
              <div id='tree'>
                <img src={tree} alt=''></img>

              </div>
            </div>
          </div>
          
        </div>
               
      </div>
    );
  }
  
  export default About;