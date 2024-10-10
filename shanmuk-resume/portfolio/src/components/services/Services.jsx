import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (

     <section id="services">
       <h5>What I offer</h5>
       <h2>Services</h2>
       <div className='container services__container'>
        <article className='service'>
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Wireframing:Creating basic sketches or blueprints of the user interface to plan the layout and functionality</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Visual Design:Developing the aesthetic elements of the interface, including colors, typography, icons, and graphics</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Visual Design:Developing the aesthetic elements of the interface, including colors, typography, icons, and graphics</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Visual Design:Developing the aesthetic elements of the interface, including colors, typography, icons, and graphics</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>UI Animation:Adding subtle animations to enhance the user experience and provide feedback on interactions.</p>
                </li>
                
            </ul>
        </article>
        <article className='service'>
            <div className="service__head">
              <h3>Web Deveolpment</h3>
            </div>
            <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>HTML:Markup language for creating the structure of web pages.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>CSS:Stylesheet language for designing the layout and appearance of web pages.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>JavaScript:Programming language for adding interactivity and functionality to web pages.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Responsive Design:Ensuring websites adapt and look good on various screen sizes and devices.
</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Server-Side Scripting: Using languages like PHP, Python or Node.js to handle server-side logic.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Database Management: Storing and retrieving data using databases like MySQL, MongoDB, or others.</p>
                </li>
            </ul>
        </article>
        <article className='service'>
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Research: Thoroughly understand your topic, audience, and goals</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Planning: Create a content strategy with clear objectives and a content calendar.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Quality: Ensure accuracy, relevance, and high-quality writing or multimedia.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Originality: Produce unique and valuable content to stand out.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Visuals: Use images, videos, infographics, and other visuals to enhance engagement</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>onsistency: Maintain a consistent tone, style, and branding across content.</p>
                </li>
            </ul>
        </article>
       </div>
     </section>
    
    )
}

export default Services
