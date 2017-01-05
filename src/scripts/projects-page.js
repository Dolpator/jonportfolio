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
      </div>
      )
   }
})
module.exports = ProjectsPage
