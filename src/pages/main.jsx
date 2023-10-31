import React from 'react'
import Navbar from './components/navbar'
import Gallery from './components/main-canvas'

const Main = () => {
    return (
        <main className='h-full'>
            <Navbar />
            <Gallery />
        </main>
    )
}

export default Main