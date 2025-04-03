import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import IndexOne from './index/index-one'
import IndexTwo from './index/index-two'
import IndexThree from './index/index-three'
import IndexFour from './index/index-four'
import IndexFive from './index/index-five'
import IndexSix from './index/index-six'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out', // Easing type
      once: false, // Whether animation should happen only once
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<IndexFive />} />
        <Route path='/index-two' element={<IndexTwo />} />
        <Route path='/index-three' element={<IndexThree />} />
        <Route path='/index-four' element={<IndexFour />} />
        <Route path='/index-five' element={<IndexOne />} />
        <Route path='/index-six' element={<IndexSix />} />
      </Routes>
    </>
  )
}

export default App
