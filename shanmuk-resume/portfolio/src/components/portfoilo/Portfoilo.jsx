import React from 'react'
import './portfoilo.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfoilo6.png'
import IMG6 from '../../assets/portfolio7.png'
const data = [
  {
    id:1,
    image:IMG1,
    title:'Royal Car Showroom: Interactive Vehicle Showcase',
    github:'https://github.com/guest098',
    demo:'https://peppy-tulumba-e0b306.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'Precision Timer: Interactive Stopwatch Application',
    github:'https://github.com/guest098',
    demo:'https://stalwart-marzipan-540af1.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'Background Eraser: Seamless Image Background Removal Tools',
    github:'https://github.com/guest098',
    demo:'https://background-remover-shanmuk-codeclause.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:' Buddy Connect: Your Personalized Friend Management Website',
    github:'https://github.com/guest098',
    demo:'https://gleeful-vacherin-9f236f.netlify.app/'
  },
  {
    id:5,
    image:IMG5,
    title:'Profile Hub: Your Centralized Personal Profile Manager',
    github:'https://github.com/guest098',
    demo:'https://reactjs-assignment3-shanmuk.netlify.app/'
  },
  {
    id:6,
    image:IMG6,
    title:' AJAX CRUD App: Seamless Add, Update, and Delete Operations',
    github:'https://github.com/guest098',
    demo:'https://stunning-cobbler-16b7e3.netlify.app/'
  },
]
const Portfoilo = () => {
  return (
    <section id='contact'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {
            data.map(({id,image,title,github,demo})=>{
              return (
                <article key ={id} className='portfolio__item'>
               <div className="portfolio__item-image">
                <img src={image} alt={title}/>
               </div>
               <h3>{title}</h3>
               <div className='portfolio__item-cta'>
               <a href={github} className='btn'target='_blank'>Github</a>
               <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
               </div>
          </article>
              )
            })
          }
        </div>
    </section>
  )
}

export default Portfoilo
