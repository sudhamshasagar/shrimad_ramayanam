import { useState } from "react";
import './Hero.css';
import React from 'react'
import { Incarnations, hero_contents } from "../../Data";

function Hero() {

    const [language, setLanguage] = useState('english');
    return(
        <>
          <div className="selection">
                  <label>
                      <input 
                       type="radio"
                       name="language"
                       checked={language === 'english'}
                       onChange={() => setLanguage("english")}
                      />English
                  </label>
                  <label>
                      <input 
                       type="radio"
                       name="language"
                       checked={language === 'kannada'}
                       onChange={() => setLanguage("kannada")}
                      />ಕನ್ನಡ
                  </label>
          </div>
  
          <div className="hero-section">
              <div className="image-section">
                {hero_contents.map((content)=>{
                  return(
                    <img src={content.img}/>
                  )
                })}
              </div>
              <div className="description-section">
                {
                  hero_contents.map((content)=>{
                    return(
                      <>
                      <h1>{language === 'english'? content.enlish_heading: content.kannada_heading}</h1>
                      <p>{language === 'english' ? content.english_content : content.kannada_content}</p>
                      </>
                    )
                  })
                }
              </div>
          </div>
          <div className="about-ramayan">
          {hero_contents.map((content, index) => (
            <div key={index}>
              <h1>{language === "english" ? content.about_heading_english : content.about_heading_kannada}</h1>
              <div className="about_section">
                <p className="about-heading">
                  {language === "english" ? content.about_ramayan_english : content.about_ramayan_kannada}
                </p>
              </div>
              <div className="about-ram">
                <h1>{language === "english" ? content.incarnation_heading_english : content.incarnation_heading_kannada}</h1>
                <div className="incarnation_section">
                  {Incarnations.map((incarnation) => (
                    <div key={incarnation.id} className="incarnation-section">
                      <div className="incarnation">
                        <div className="incarnation-image">
                          <img src={incarnation.img} alt={incarnation.name} />
                        </div>
                        <div className="incarnation-info">
                          <h1>
                            {incarnation.id}. {language==='english'? incarnation.name_english: incarnation.name_kannada}
                          </h1>
                          <p>{language==='english'? incarnation.avatar_english: incarnation.avatar_kannada}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
         
        </>
          
      );
}

export default Hero
