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
                        <li><a href="https://twitter.com/"><i className="fa fa-envelope-o fa-2x multi-icons" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa fa-linkedin fa-2x multi-icons" aria-hidden="true"></i></a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="/#Skills">Skills</a></li>
                        <li><a href="/#Projects">Projects</a></li>
                     </ul>
                  </nav>
               </div>
         </div>
         <div className = "container project-container ">
            <h1 className = "text-center">My Projects</h1>
               <div className ="row">
                  <div className = "col-xs-12 col-md-3 text-center">
                     <img className ="espresso thumbnail" src = "../images/bubblegum2" />
                     <h3>Espresso</h3>
                  </div>
                  <div className = "col-xs-12 col-md-3 text-center">
                     <img className ="gart thumbnail" src = "../images/jong.jpg" />
                     <h3>GART</h3>
                  </div>
                  <div className = "col-xs-12 col-md-3 text-center">
                     <img className ="github thumbnail" src = "../images/family.jpg" />
                     <h3>GitHub Clone</h3>
                  </div>
                  <div className = "col-xs-12 col-md-3 text-center">
                     <img className ="iluggit thumbnail" src = "../images/jong.jpg" />
                     <h3>ILuggit</h3>
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
