import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const ProjectsPage = React.createClass({

   render: function(){

      return(
         <div>
            <div>
               <div className = "container main-container">
                  <nav className="navbar navbar-default">
                     <a className="navbar-brand" href="#"></a>
                     <ul className="nav navbar-nav navbar-right">
                        <li><a href="mailto:dolpator@gmail.com"><i className="fa fa-envelope-o fa-2x multi-icons" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/Dolpator"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/jon-gammon-2154555a/"><i className="fa fa fa-linkedin fa-2x multi-icons" aria-hidden="true"></i></a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Projects">Projects</a></li>
                     </ul>
                  </nav>
               </div>
         </div>
         <div className = "container project-container ">
            <h1 className = "text-center">My Projects</h1>
               <div className ="row">
                  <div className = "col-xs-12 col-md-3 text-center">
                     <img className ="gart thumbnail" src = "../images/GART Screen Shot.png" />
                     <h3>GART</h3>
                     <strong>PLATFORMS USED:</strong>
                        <ul className = "platforms">
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>JAVASCRIPT</li>
                        </ul>
                     <a href="https://github.com/syburris/GART"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
                     <a href="https://github.com/Dolpator"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
                  </div>
                  <div className = "col-xs-12 col-md-3 text-center">
                     <img className ="github thumbnail" src = "../images/Github Clone Screen Shot.png" />
                     <h3>GitHub Clone</h3>
                     <strong>PLATFORMS USED:</strong>
                        <ul className = "platforms">
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>BACKBONE</li>
                           <li>JAVASCRIPT</li>
                        </ul>
                     <a href="https://github.com/Dolpator/Assignment-17GithubCLone"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
                     <a href="https://github.com/Dolpator"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
                  </div>
                  <div className = "col-xs-12 col-md-3 text-center">
                     <a href ="https://jonexpresso.herokuapp.com/"><img className ="espresso thumbnail" src = "../images/Expresso Screen Shot.png" /></a>
                     <h3>Espresso</h3>
                     <strong>PLATFORMS USED:</strong>
                        <ul className = "platforms">
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>BACKBONE</li>
                           <li>REACT</li>
                           <li>FLUX</li>
                           <li>JAVASCRIPT</li>
                        </ul>
                     <a href="https://github.com/Dolpator/Expresso2"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
                     <a href="https://jonexpresso.herokuapp.com/"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
                  </div>
                  <div className = "col-xs-12 col-md-3 text-center">
                     <a href = "https://joniluggit.herokuapp.com/"><img className ="iluggit thumbnail" src = "../images/Iluggit Screen Shot.png" /></a>
                     <h3>ILuggit</h3>
                     <strong>PLATFORMS USED:</strong>
                        <ul className = "platforms">
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>BACKBONE</li>
                           <li>REACT</li>
                           <li>FLUX</li>
                           <li>JAVASCRIPT</li>
                        </ul>
                     <a href="https://github.com/Dolpator/iLuggit"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
                     <a href="https://joniluggit.herokuapp.com/"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
                  </div>

               </div>
         <div className="footer-container text-center">
            <a href="mailto:dolpator@gmail.com"><i className="fa fa-envelope-o fa-2x multi-icons" aria-hidden="true"></i></a>
            <a href="https://github.com/Dolpator"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/jon-gammon-2154555a/"><i className="fa fa fa-linkedin fa-2x multi-icons" aria-hidden="true"></i></a>
         </div>
      </div>
   </div>
   )
   }
})
module.exports = ProjectsPage
