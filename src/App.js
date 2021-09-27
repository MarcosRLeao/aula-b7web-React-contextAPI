import { useState } from 'react'
import './App.css'

import { StateProvider } from './contexts/StateContext';


import Header from './components/Header'
import Menu from './components/Menu'
import Body from './components/Body'

const App = () => {
  

  return (
    <StateProvider>
      <div className='container'>
        <Header />
        <section>
          <Menu />
          <Body />
        </section>
      </div>
    </StateProvider>
  )
}

export default App
