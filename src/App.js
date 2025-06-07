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
import ErrorPage from './ErrorHandler/error.jsx';
import Loader from './component/Loader/loader.jsx';

function App() {
  const [loader, setLoader] = useState(true)
  const [errorFall, setError] = useState(false)
  const [navStatus, setNavStatus] = useState(false)
  const [data, setData] = useState(null)

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


  useEffect(() => {

    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setTimeout(async () => {
        const res = await fetch('/portfolioData.json');
        if (!res.ok) {
          setError(true)
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setError(false)
        setLoader(false)
        setData(data.portfolio);
      }, 5000);
    } catch (error) {
      setLoader(false)
      setError(true);
      throw error;
    }
  };



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
    <>
      {errorFall ? <ErrorPage /> :
        <>
          {loader ? <Loader /> : <div className="App">
            <Home data={data.home}/>
            <About data={data.about}/>
            <Experience data={data.experience}/>
            <Project data={data.projects}/>
            <Skills data={data.skills}/>
            <Footer />

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
          </div>}
        </>
      }
    </>
  );
}

export default App;
