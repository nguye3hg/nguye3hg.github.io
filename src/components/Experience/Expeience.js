import "./Experience.css";
import Cat1 from "./Cat1.png";
import Cat2 from "./Cat2.png";
import star1 from "./star1.png";
import moonandcat from "./moonandcat.png";
import UClogo from "./UClogo.png";
let appear = false;
let turnLight = false;
function yellow() {
  document.getElementById("lampLight2").style.backgroundColor = "yellow";
}
function transparent() {
  document.getElementById("lampLight2").style.backgroundColor = "transparent";
}
function turnonLight1() {
  if (turnLight) {
    turnLight = false;
    document.getElementById("lampLight1").style.backgroundColor = "transparent";
    setTimeout(transparent, 700);
  } else {
    turnLight = true;
    document.getElementById("lampLight1").style.backgroundColor = "yellow";
    setTimeout(yellow, 700);
  }
}
function changeCat() {
  if (appear) {
    document.getElementById("Cat1").style.opacity = "1";
    document.getElementById("Cat1").style.visibility = "visible";
    document.getElementById("Cat1").style.transition = "opacity 2s linear";

    appear = false;
  } else {
    document.getElementById("Cat1").style.opacity = "0";
    document.getElementById("Cat1").style.visibility = "hidden";
    document.getElementById("Cat1").style.transition =
      "visibility 0s 2s, opacity 2s linear";
    appear = true;
  }
}

function Experience() {
  return (
    <div id="expContainer">
      <div id="Experience">
        <div id="ExpContainer">
          <div id="curvedLamp1" onClick={turnonLight1}>
            <div id="hider1"></div>
            <div id="lampCone1"></div>
            <div id="lampBulb1"></div>
            <div id="lampLight1"></div>
            <div id="curvedLamp2">
              <div id="hider2"></div>
              <div id="lampCone2"></div>
              <div id="lampBulb2"></div>
              <div id="lampLight2"></div>
            </div>
          </div>
          <div id="standingLamp"></div>
          <div id="person">
            <div id="headPerson"></div>
            <div id="bodyPerson"></div>
            <div id="handPerson1"></div>
            <div id="handPerson2"></div>
            <div id="legPerson1"></div>
            <div id="legPerson2"></div>
          </div>
          <div id="cat">
            <img onClick={changeCat} src={Cat1} id="Cat1" alt=""></img>
            <img src={moonandcat} id="moonandcat" alt=""></img>
          </div>
          <div id="slider">
            <h2>MY EXPERIENCE</h2>
            <br></br>
            <h3>
              <div id="logoContainer1">
                <img src={UClogo} alt=""></img>
              </div>
              <div id="TA">
                Software Engineering Co-op, IRAS Lab, University of Cincinnati
              </div>
            </h3>
            <br></br>
            <h3>
              <div id="logoContainer1">
                <img src={UClogo} alt=""></img>
              </div>
              <div id="TA">Front-End Developer, Pam Air, Ha Noi, Viet Nam</div>
            </h3>
            <br></br>
            <h3>
              <div id="logoContainer2">
                <img src={UClogo} alt=""></img>
              </div>
              <div id="Coop1">
                CS Intern, BCB-IRROPS, FPT Software, Ha Noi, Viet Nam
              </div>
            </h3>
            <br></br>
          </div>
        </div>
        <div id="belowContainer">
          <div id="floor"></div>
          <div id="pillarContainer">
            <div id="pillar1"></div>
            <div id="pillar2"></div>
            <div id="pillar3"></div>
            <div id="pillar4"></div>
            <div id="pillar5"></div>
            <div id="pillar6"></div>
            <div id="pillar7"></div>
            <div id="pillar8"></div>
          </div>
        </div>
      </div>
      <div id="expTransition"></div>
    </div>
  );
}

export default Experience;
