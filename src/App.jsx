import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <main className='min-h-screen'>
      <Carousel/>
      </main>
  
      <Footer/>


    </>
  )
}

export default App
