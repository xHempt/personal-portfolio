import React from 'react'
import Header from './components/Header/Header'
import useLocalStorage from './hooks/useLocalStorage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import AboutPage from './components/AboutPage/AboutPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  const [dark, setDark] = useLocalStorage('mode', false)

  return (
    <div className={dark === true ? 'app dark-mode' : 'app'}>
      <Router>
        <Header changeMode={setDark} mode={dark} />
        <Switch>
          <Route path="/" exact component={() => <ProjectsPage />} />
          <Route path="/about" exact component={() => <AboutPage />} />
        </Switch>
      </Router>
    </div>
  )
}
