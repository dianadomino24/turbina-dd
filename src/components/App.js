import React from 'react'
// import { CurrentSongContext } from '../contexts/CurrentSongContext'
// import api from '../utils/api'
import Main from './Main'
import Footer from './Footer'

function App() {
    // const [isFormValue, setIsFormValue] = React.useState({
    //     nameUser: '',
    //     telephon: '',
    //     email: '',
    //     poem: ''
    // });

    // const handelInputChange = React.useCallback((e) => {
    //     const [ name, value ] = e.target;
    //     setIsFormValue((prevState) => {[name]: value})
    // }, [setIsFormValue]);

    // const [nameUser, telephon, email, poem] = isFormValue;

    return (        
        < body >
        <div className="page">
            {/* <div className="cover"></div> */}
            <Main />
            <Footer />
        </div>
        </ body>
    )
}

export default App
