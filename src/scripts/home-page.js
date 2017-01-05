import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const HomePage = React.createClass({

   render: function(){

      return(
         <div>
            <div>
            <div className = "container main-container">
               <nav className="navbar navbar-default" >
                  <ul className="nav navbar-nav navbar-right">
                     <li><a href="https://twitter.com/"><i className="fa fa-envelope-o fa-2x multi-icons" aria-hidden="true"></i></a></li>
                     <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a></li>
                     <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa fa-linkedin fa-2x multi-icons" aria-hidden="true"></i></a></li>
                     <li><a href="#">Home</a></li>
                     <li><a href="/#Skills">Skills</a></li>
                     <li><a href="/#Projects">Projects</a></li>
                  </ul>
               </nav>
               <h1>Jon Gammon</h1>
               <p>Front End Web Developer</p>
            </div>
            <div className = "container intro-container text-center">
            <h1>You Should Code</h1>
            <p>When my wife came home from her first day cleaning The Iron Yard she was so excited. She began telling me you have to check this place out, it has you written all over it.  Of course I was in complete denial, but was interested. I had dabbled a little in web design in the past and found it very rewarding, but why would I want to give up everything that I have worked for the past 20 years?  Before attending The Iron Yard, I worked my way through life as an Electronics Technician building Fiber Optic cables.</p>
            <p> As a Jr. Front End Developer, I am commited to designing responsive web applications that are both appealing and easy to use.  My passion for web development is growing, and I enjoy learning new technologies. Learning to program didn't come easy for me, and I spent countless hours learning to code while attending The Iron Yard.  I consistently stayed outside my comfort zone, and it is a place that I am very familiar with. I found my passion, and though I have a lot of learning to do, I found great determination in myself and a great willingness to figure out problems.</p>
            <p>When I am not coding, I am an avid saltwater aquarist, Advanced Level SCUBA Diver, and dedicated father and husband.  My innate ability to figure out how things work, fix things that are broken, and a guy that wears many hats, sets me a part from others.  This trait enables me to tackle almost any problem, and work hard to figure out a solution.  </p>
            </div>
         </div>

               <div className="footer-container text-center">
                  <a href="https://twitter.com/"><i className="fa fa-envelope-o fa-2x multi-icons" aria-hidden="true"></i></a>
                  <a href="https://www.instagram.com/?hl=en"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
                  <a href="https://www.instagram.com/?hl=en"><i className="fa fa fa-linkedin fa-2x multi-icons" aria-hidden="true"></i></a>
               </div>
         </div>
         )

   }
})
module.exports = HomePage
