import React from 'react'
// import { CurrentSongContext } from '../contexts/CurrentSongContext'
// import api from '../utils/api'
import Main from './Main'
import Footer from './Footer'

function App() {
    const [isName, setIsName] = React.useState('');
    const [nameDirty, setNameDirty] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'userName':
                setNameDirty(true)
                break
        };
    }
    // const handelInputChange = React.useCallback((e) => {
    //     const [ name, value ] = e.target;
    //     setIsFormValue((prevState) => {[name]: value})
    // }, [setIsFormValue]);

    // const [nameUser, telephon, email, poem] = isFormValue;
function nameHandler(e) {
    setIsName(e.target.value)
    if(e.target.value.length < 3) {
        setNameError(true)
    } else {setNameError(false)}
}
    return (
        < body >
            <div className="page">
                {/* <div className="cover"></div> */}
                <Main value={isName} onChange={nameHandler} onError={nameError} onDirty={nameDirty} onBlur={blurHandler} />
                <Footer />
            </div>
        </ body>
    )
}

export default App
