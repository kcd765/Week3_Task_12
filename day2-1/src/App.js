import React from 'react'
import Comp1 from './components/qn1/Comp1'
import Comp2 from './components/qn1/Comp2'
import Q2 from './components/qn2/q2'
import './app.css'

const App = () => {
  return (
    <div>
      Qn1:
      <Comp1 />
      <Comp2 />

      <Q2 />
      <div>
      </div>

    </div>
  )
}

export default App