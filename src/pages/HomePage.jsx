import React, { useEffect } from 'react'
import Header from '../components/Header/Header.jsx';
import Title from '../components/Title/Title.jsx';
import About from '../components/About/About.jsx';
import Tech from '../components/Tech/Tech.jsx';
import News from '../components/News/News.jsx';
import Donate from '../components/Donate/Donate.jsx';
import Footer from '../components/Footer/Footer.jsx';
import photo from '../images/homeMain-photo.png' 

const HomePage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])

  return (
    <>
      <Header isHome={true} />
      <Title photo={photo} isHome={true}/>
      <About />
      <Tech />
      <News />
      <Donate />
      <Footer />
    </>
  )
};

export default HomePage
