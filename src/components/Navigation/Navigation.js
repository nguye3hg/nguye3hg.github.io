import  "./Navigation.css";
function scrollView(e){
  document.getElementById(e).scrollIntoView({behavior:'smooth'});
}
function Navigation() {
    return (
      <div id="Navigation">
          <a href="#" className="logo">Hoang Nguyen</a>
            <ul>
                <li><a onClick={()=>scrollView('Introduction')} className="active">Home</a></li>
                <li><a onClick={()=>scrollView('About')} >About</a></li>
                <li><a onClick={()=>scrollView('Experience')} >Experience</a></li>
                <li><a onClick={()=>scrollView('Work')} >Work</a></li>
                <li><a onClick={()=>scrollView('Contact')} >Contact</a></li>
            </ul>
      </div>
    );
  }
  
  export default Navigation;