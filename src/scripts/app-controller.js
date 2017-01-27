import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

import ProjectsPage from './projects-page.js'
import SkillsPage from './skills-page.js'
// import Resume from './resume.js'
import HomePage from './home-page.js'

const AppController = React.createClass({
   render: function(){

      switch(this.props.routedFrom){
         case "ProjectsPage":
            return <ProjectsPage />
            break;

         case "SkillsPage":
            return <SkillsPage />
            break;

         case "Resume":
            return <Resume />
            break;

         case "HomePage":
            return <HomePage />
            break;

         default:
            return
            <div>
               <h1>Please Return to the home page</h1>
               <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
            </div>
      }
   }
})
module.exports = AppController
