import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub </h2>
            <p className='fs-17'>Books hold a special place in our lives. There are profound positive effects on your mind from reading the right kind of books.
                                 The countless benefits of reading books include stress reduction, preventing age-related illnesses, and keeping your mental and physical health at its best.
                                 The following list of book captions and quotes is perfect for those who can’t wait to share their reading adventure with the online world..</p>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
