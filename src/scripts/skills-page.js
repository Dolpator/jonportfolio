import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const SkillsPage = React.createClass({

   render: function(){

      return(
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
               <h1 className = "text-center">Everyone should learn how to code, it teaches you how to think!</h1>
            </div>
            <div className = "container technical-container">
               <h1 className ="text-center">Technical</h1>
               <img className = "html-image" src="../images/html5.png" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '75%'}}></div>
            </div>
               <img className = "css-image" src="../images/css.jpeg" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '60%'}}></div>
            </div>
               <img className = "javascript-image" src="../images/javascript.jpeg" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '40%'}}></div>
            </div>
               <img className = "react-image" src="../images/react.png" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '40%'}}></div>
            </div>
               <img className = "backbone-image" src="../images/backbone.png" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '60%'}}></div>
            </div>
               <img className = "flux-image" src="../images/flux.png" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '30%'}}></div>
            </div>
               <img className = "fiber-image" src="../images/fiber.jpeg" /><p>Shipboard Fiber Optics</p>
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '90%'}}></div>
            </div>
               <img className = "troubleshooting-image" src="../images/troubleshooting.png" />
               <div className="progress progress-striped active">
               <div className="progress-bar progress-bar-info" style={{width: '80%'}}></div>
            </div>
            </div>

            <div className = "container education-container">
               <h1 className ="text-center">Education</h1>
               <div className ="row">
                  <div className = "col-xs-12 col-md-4 text-center">
                     <a href ="https://theironyard.com"><img className = "ironyard thumbnail" src = "../images/theironyard.png" /></a>
                     <p><strong>The Iron Yard</strong> - Charleston, South Carolina: Front-End Engineering</p>
                  </div>
                  <div className ="col-xs-12 col-md-4 text-center">
                     <a href ="www.ict.edu/chamblee-college-in-atlanta"><img className ="ict thumbnail" src = "../images/itc.jpeg" /></a>
                     <p><strong>Interactive College of Technology</strong> - Decator, Georgia: Computer Service Repair</p>
                  </div>
                  <div className ="col-xs-12 col-md-4 text-center">
                     <a href="www.tridenttech.edu"><img className ="ttc thumbnail" src = "../images/ttc.png" /></a>
                     <p><strong>Trident Technical College</strong> - Core Studies in Information Systems</p>
                  </div>
               </div>
            </div>
            <div className = "container experience-container ">
               <h1 className = "text-center">Experience</h1>
                  <div className ="row">
                  <div className = "col-xs-12 col-md-4 text-center">
                     <a href="www.baesystems.com/en/home"><img className ="baesystems thumbnail" src = "../images/baesystems.jpeg" /></a>
                     <p><strong>BAE Systems</strong> - Electronics Technician III</p>
                     <p>Supported Government Projects in areas of integration and installation of communication equipment and computer systems with expertise in fabrication of MIL-STD Fiber Optic cables, SPAWAR DATA Center Installation, and Quality Assurance inspections for cable assemblies.  Also recertified previous fiber optic technicians in accordance with MIL-STD 2042.</p>
                  </div>
                     <div className = "col-xs-12 col-md-4 text-center">
                        <a href ="spacemakersclosets.com"><img className = "spacemaker thumbnail" src = "../images/spacemakers.jpg" /></a>
                        <p><strong>SpaceMakers</strong> - Closet Installation Technician</p>
                        <p>Design, integrated, and installed proprietary closet organization systems in new construction, owner-occupied, and commercial properties. Worked with crown molding, laminate counter-tops, and specialty stain-grade wood finishes. Installed organization systems in pantries, laundry rooms, and garages, as well as, closets.</p>
                     </div>
                  <div className = "col-xs-12 col-md-4 text-center">
                     <a href= "www.averydennison.com"><img className = "avery thumbnail" src = "../images/avery.png" /></a>
                     <p><strong>Avery Dennison/Stimsonite Corporation</strong> - Lead Foreman/Technical Service Rep/Electronics Technician</p>
                     <p>Communicated operational issues and changes to supervisor on a regular basis, manufactured thermoplastic application equipment for DOT, supervision of several employees in technical areas of electrical, pneumatic, hydraulic, gas systems, welding, and assembly.</p>
                  </div>
               </div>
            </div>

            <div className = "container accomplishment-container">
               <h1 className = "text-center">Awards</h1>
               <p><img className ="BCA thumbnail" src= "../images/BCA.jpeg" /><strong>Bronze Chairman Award</strong> - Fiber Optic Cost Saving Processes (was nominated for Silver)</p>
               <p><img className ="BCA thumbnail" src= "../images/BCA.jpeg" /><strong>Bronze Chairman Award</strong> - TCF Project supporting clients and BAE for efforts in under budget and ahead of schedule.</p>
               <p><img className ="BCA thumbnail" src= "../images/bae2.jpeg" /><strong>Pioneer Award</strong> - Fiber Optic Cost Saving Processes</p>
               <p><img className ="BCA thumbnail" src= "../images/bae2.jpeg" /><strong>Pioneer Award</strong> - AIE3 mockup and demo for potential clients.  Worked under harsh conditions and stressful environment to provide a successful demo of project.</p>
               <p><img className ="BCA thumbnail" src= "../images/bae2.jpeg" /><strong>Impact Awards</strong> - Numerous special recognition awards for various task throughout the company, nominated by peers.</p>
            </div>

            <div className = "container volunteer-container">
               <h1 className = "text-center">Volunteer</h1>
               <p><img src="../images/tiykc.jpeg" /><strong>The Iron Yard Kids Coding Camp</strong> - Instructor for a 4 week code camp for kids 3rd - 6th grade using Scratch.</p>
            </div>
            <div className="footer-container text-center">
               <a href="mailto:dolpator@gmail.com"><i className="fa fa-envelope-o fa-2x multi-icons" aria-hidden="true"></i></a>
               <a href="https://github.com/Dolpator"><i className="fa fa-github fa-2x multi-icons" aria-hidden="true"></i></a>
               <a href="https://www.linkedin.com/in/jon-gammon-2154555a/"><i className="fa fa fa-linkedin fa-2x multi-icons" aria-hidden="true"></i></a>
            </div>
      </div>
      )
   }
})
module.exports = SkillsPage
