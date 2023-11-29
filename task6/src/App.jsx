import { useState } from 'react'
import './App.css'
import Columns from './components/columns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <WishlistProvider>
     <Columns></Columns>
    </WishlistProvider>
    </>
  )
}

export default App
