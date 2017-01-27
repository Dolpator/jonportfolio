import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import ProjectsPage from './projects-page.js'
import SkillsPage from './skills-page.js'
// import Resume from './resume.js'
import HomePage from './home-page.js'
import AppController from './app-controller.js'


const AppRouter = Backbone.Router.extend({
   routes: {
      "Projects" : "showProjectsPage",
        "Skills" : "showSkillsPage",
        "Resume" : "showResume",
              "" : "showHomePage"

},

showProjectsPage: function(){
   ReactDOM.render(<AppController routedFrom =  "ProjectsPage" />, document.querySelector("#app-container"))
},

showSkillsPage: function(){
   ReactDOM.render(<AppController routedFrom =  "SkillsPage" />, document.querySelector("#app-container"))
},

showResume: function(){
   ReactDOM.render(<AppController routedFrom =  "Resume" />, document.querySelector("#app-container"))
},

showHomePage: function(){
   ReactDOM.render(<AppController routedFrom =  "HomePage" />, document.querySelector("#app-container"))
},

initialize: function(){
   Backbone.history.start();
}
})

const app = new AppRouter()
