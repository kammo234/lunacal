import React from 'react'
import ProfileWidget from './components/ProfileWidget'
import GalleryWidget from './components/GalleryWidget'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="left-half"></div>
      <div className="right-half">
        <ProfileWidget />
        <GalleryWidget />
      </div>
    </div>
  )
}

export default App