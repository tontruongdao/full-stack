import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path ='/' component={}/>
          <Route path='/surveys' component={}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App