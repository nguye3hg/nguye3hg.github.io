import './Contact.css';
import github from'./github.png';
import facebook from'./facebook.png';
import linkedin from'./linkedin.png';
import instagram from'./instagram.png';
function GoGitHub(){
    window.location = 'https://github.com/nguye3hg';
}
function GoFaceBook(){
    window.location = 'https://www.facebook.com/profile.php?id=100005078387357';
}
function GoLinkedin(){
    window.location = 'https://www.linkedin.com/in/nguye3hg/';
}
function GoInstagram(){
    window.location = 'https://www.instagram.com/hnnhhnguyen/';
}
function delay1 () {
    setTimeout( GoGitHub, 1400 );
}
function delay2 () {
    setTimeout( GoFaceBook, 1400 );
}
function delay3 () {
    setTimeout( GoLinkedin, 1400 );
}
function delay4 () {
    setTimeout( GoInstagram, 1400 );
}
function Contact(){
    return (
        <div id='Contact'>
            <div id='textWrapper'>
                <p>
                    <h1>A LITTLE DARK IN HERE</h1><br></br>
                    <h1>PUT SOME LIGHT ON </h1><br></br>
                    <h1>WITH THE BUTTON </h1><br></br>
                </p>
            </div>
            <div id='buttonWrapper' >
                    <div id='turnonButton' ><div id='Click'>Click</div></div>
            </div>
            
            <div id='imgWrapper'>
                <div onClick={delay1}><img src={github} id='github' alt=''/></div>
                <a onClick={delay2}><img src={facebook} alt=''/></a>
                <a onClick={delay3}><img src={linkedin} alt=''/></a>
                <a onClick={delay4}><img src={instagram} id='instagram' alt=''/></a>
            </div>
            <h2> MAKE BY HOANG NGUYEN WITH 🖤</h2>
            

        </div>
    );
}
  
  export default Contact;