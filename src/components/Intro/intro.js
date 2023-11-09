import React from 'react';
import './intro.css';
import bg from '../NavBar/winter.png';
import buttonimg from '../NavBar/button.png';
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <span className="hello">Hello </span>
            <span className="introtext">I'm <span className="introname">Anthony</span><br/> Cybersecurity person</span>
            <p className="intropara">Hi! I'm Anthony Tran, a second-year computer science student at the University of Texas at Dallas.<br />
            While I am pursuing a degree in computer science, I am deeply intrigued in the world of Cybersecurity. <br />
            I love how it is always evolving into something even more interesting than the past, and I  <br />
            
            <br /><br />Outside of academics, I love working out, rock climbing, watching anime, and listening to <br />
            music</p>
            <Link><button className="btn"><img src={buttonimg} alt="reach out button" className='buttonimg' />Reach Out</button></Link>
        </div>
        <img src={bg} alt="me fr" className="bg" />

    </section>
  )
}

export default Intro