require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// TODO
import 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import TopNav from './components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Resume from './components/Resume'
import Contact from './components/Contact'


ReactDOM.render(
  <>
    <TopNav/>
    <Intro/>
    <About/>
    <ProjectList/>
    <Resume/>
    <Contact/>
  </>
  , document.getElementById('main'))