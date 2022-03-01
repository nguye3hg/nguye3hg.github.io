import './Work.css';
import Contact from '../Contact/Contact';
import pj1 from './pj1.png';
import pj2 from './pj2.png';
import pj3 from './pj3.png';
import pj4 from './pj4.png';
let light=false;

function lightOnTransparent1(){
  document.getElementById('light2').style.backgroundColor='transparent';
}
function lightOnTransparent2(){
  document.getElementById('light3').style.backgroundColor='transparent';
}
function lightOnTransparent3(){
  document.getElementById('light4').style.backgroundColor='transparent';
}
function lightOnTransparent4(){
  document.getElementById('light5').style.backgroundColor='transparent';
}
function lightOnTransparent5(){
  document.getElementById('light6').style.backgroundColor='transparent';
}
function lightOnTransparent6(){
  document.getElementById('light7').style.backgroundColor='transparent';
}
function lightOnTransparent7(){
  document.getElementById('light8').style.backgroundColor='transparent';
}
function lightOnYellow1(){
  document.getElementById('light2').style.backgroundColor='yellow';
}
function lightOnYellow2(){
  document.getElementById('light3').style.backgroundColor='yellow';
}
function lightOnYellow3(){
  document.getElementById('light4').style.backgroundColor='yellow';
}
function lightOnYellow4(){
  document.getElementById('light5').style.backgroundColor='yellow';
}
function lightOnYellow5(){
  document.getElementById('light6').style.backgroundColor='yellow';
}
function lightOnYellow6(){
  document.getElementById('light7').style.backgroundColor='yellow';
}
function lightOnYellow7(){
  document.getElementById('light8').style.backgroundColor='yellow';
}

function turnon(){
  if(light){
    light=false;
    document.getElementById('light1').style.backgroundColor='transparent';
    setTimeout(lightOnTransparent1,200);
    setTimeout(lightOnTransparent2,600);
    setTimeout(lightOnTransparent3,800);
    setTimeout(lightOnTransparent4,1000);
    setTimeout(lightOnTransparent5,1200);
    setTimeout(lightOnTransparent6,1400);
    setTimeout(lightOnTransparent7,1600);


  }else{
    light=true;
    document.getElementById('light1').style.backgroundColor='yellow';
    setTimeout(lightOnYellow1,200);
    setTimeout(lightOnYellow2,600);
    setTimeout(lightOnYellow3,800);
    setTimeout(lightOnYellow4,1000);
    setTimeout(lightOnYellow5,1200);
    setTimeout(lightOnYellow6,1400);
    setTimeout(lightOnYellow7,1600);
    
  }
}

function Work(){
    return (
      <div id="Work"  >
        <div id='part1'>
          <div id='workContainer'>
              <a href='https://smartbrain-reg.herokuapp.com/'>
                <div id='workCard1'>
                  <h2>Face Regconigtion Website</h2>
                  <h3>Heroku App</h3>
                  <br id='br1'></br>
                  <div id='pjImgfixer1'>
                        <div id='pjImgContainer1'>
                          <img src={pj4} alt=''></img>
                        </div>
                  </div>
                </div>
              </a>
              <a href='https://api.practera.com/portfolio/1628/nguye3hg%40mail.uc.edu'>
                <div id='workCard2'>
                  <h2>WACE Global Student Collaborative Project</h2>
                  <h3>Sportandi</h3> 
                  <div id='pjImgfixer2'>
                        <div id='pjImgContainer2'>
                          <img src={pj2} alt=''></img>

                        </div>
                  </div>
                </div>
              </a>
              <a href='https://makeuc-pygame.netlify.app/'>
                <div id='workCard3'>
                  <h2>WarGame</h2>
                  <h3>MakeUC Hackathon</h3> 
                  <br id='br3'></br>
                  <div id='pjImgfixer3'>
                        <div id='pjImgContainer3'>
                          <img src={pj3} alt=''></img>
                        </div>
                  </div>
                </div>
              </a>
              <a href='https://nguye3hg.netlify.app/'>
                <div id='workCard4'>
                  <h2>Old Portfolio Website</h2>
                  <h3>Netlify App</h3>
                  <br id='br4' ></br>
                  <div id='pjImgfixer4'>
                        <div id='pjImgContainer4'>
                          <img src={pj1} alt=''></img>
                        </div>
                  </div>
                    
                </div>
              </a>
          </div>
          <div id='lampContainer'>
            <div id="lamp" >
              <div className='rope' id='rope1'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light1'></div>
            </div>
            <div id="lamp1" >
              <div className='rope' id='rope2'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light2'></div>
            </div>
            <div id="lamp2" >
              <div className='rope' id='rope3'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light3'></div>
            </div>
            <div id="lamp3" >
              <div className='rope' id='rope4'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light4'></div>
            </div>
            <div id="lamp4" >
              <div className='rope' id='rope5'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light5'></div>
            </div>
            <div id="lamp5" >
              <div className='rope' id='rope6'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light6'></div>
            </div>
            <div id="lamp6" >
              <div className='rope' id='rope7'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light7'></div>
            </div>
            <div id="lamp7" >
              <div className='rope' id='rope8'></div>
              <div className='cone' id='cone1'></div>
              <div className='bulb' id='bulb1'></div>
              <div className='light' id='light8'></div>
            </div>
          </div>
        </div>
        <div id='transition'></div>
        <div id='part2' onClick={turnon}>
          < Contact />
          
          <div id='filler'></div> 
        </div> 
        
           
      </div>
    );
}
  
  export default Work;