import React from 'react'
// import { CurrentSongContext } from '../contexts/CurrentSongContext'
// import api from '../utils/api'
import Main from './Main'
import Footer from './Footer'

function App() {
    return (
        <body>
            <div className="page">
                {/* <div className="cover"></div> */}
                <Main />
                <Footer />
            </div>
        </body>
    )
}

export default App
