import React from 'react'
import Heading from "../common/header/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"


const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='../../../public/images/pic2.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='TECH-DRIVEN SAFETY' title='Benefits About Tech-Driven Safety' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default AboutCard
