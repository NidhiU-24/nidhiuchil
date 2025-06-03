import logo from './logo.svg';
import './App.css';
import Home from "./view/Home/Home.jsx";
import SocialContainer from './component/SocialContainer/socialContainer.jsx';
import About from './view/About/about';
import Portal from './component/portal';
import Experience from './view/Experience/experience';
import Project from './view/Projects/projects';
import Skills from './view/Skills/skills';
import ResumeContainer from './component/ResumeContainer/resumeContainer.jsx';
import Navigation from './component/NavigationContainer/navigation.jsx';
import { useEffect, useState } from 'react';
import Footer from './view/Footer/footer.jsx';

function App() {
  const [navStatus, setNavStatus] = useState(false)

  useEffect(() => {
  if (navStatus) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto'; 
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [navStatus]);

  const toggleNav = () => {
    setNavStatus(prev => !prev)
  }

  const scrollTo = (id) => {
    setNavStatus(prev => !prev)
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Footer/>

      <Portal>
        <div className='socialContainerOverlay'>
          <SocialContainer />
        </div>
        <div className='resumeContainerOverlay'>
          <ResumeContainer />
        </div>
        <div className={`navOverlay ${navStatus ? "open" : ""}`}>
          <Navigation scrollTo={(val) => scrollTo(val)} />
        </div>
        <div className='navigation' onClick={toggleNav}>
          <img src="assets/nidhi_fav.png"></img>
          <div></div>
          <span>{navStatus ? 'CLOSE' : 'MENU'}</span>
        </div>
      </Portal>
    </div>




  );
}

export default App;
