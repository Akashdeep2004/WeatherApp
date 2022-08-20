import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Searched from './components/Searched'
import Favourite from './components/Favourite'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const App = () => {
  return (
    <div>
    <TransitionGroup
      timeout={100}
      
    >
    <CSSTransition
            classNames="fade"
            timeout={300}
          >
          <Routes>
          <Route path='/' exact element={<Favourite />} />
          <Route path='/search' element={<Searched />} />
          </Routes>
          </CSSTransition>
    </TransitionGroup>
    </div>
  )
}

export default App
