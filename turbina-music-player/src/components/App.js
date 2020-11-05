import React, { useEffect, useState } from 'react'
// import api from '../utils/api'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
    return (
        <div className="App">
            <div className="page">
                <div className="page__container">
                    <Main />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
