import { useState } from 'react'
import './App.css'
import Columns from './components/Columns/index'
import { WishlistProvider } from './Context/indexwishlist'

function App() {

  return (
    <>
      <WishlistProvider>
        <Columns></Columns>
      </WishlistProvider>
    </>
  )
}

export default App
