import React from 'react'

function Form(props) {
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
<form className="form">
                    <h2 className="form__title">ФОРМА</h2>
                    <p className="form__subtitle">
                        Заполняя эту форму, вы становитесь частью проекта.
                    </p>
                    <input
                        type="text" onBlur={(e) => {blurHandler(e)}} 
                        style={(nameError & nameDirty) ? {color:'red'} : {color:'black'}}
                        onChange={(e) => {nameHandler(e)}}
                        placeholder="Имя и фамилия автора"
                        className="form__input"
                        name="userName" 
                        value={isName}
                        required
                    />
                    <span className={`form__error ${(nameError & nameDirty) ? 'form__error_visible' : ''}`}>
                        Какая-то ошибка*
                    </span>
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="form__input"
                        name="telephone" 
                        // value={props.value}
                        required
                    />
                    <span className="form__error">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="email"
                        placeholder="Почта"
                        className="form__input"
                        name="email" 
                        // value={props.value}
                        required
                    />
                    <span className="form__error" id="">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="text"
                        placeholder="Стихи"
                        className="form__input"
                        name="poem"
                        // value={props.value}
                        required
                    />
                    <span className="form__error" id="">
                        Какая-то ошибка*
                    </span>
                    <label htmlFor="offer" className="form__label">
                        <input
                            type="radio"
                            className="form__input-radio"
                            id="offer"
                            required
                        />
                        Согласен с&nbsp;
                        <a href="/#" className="form__link form__label">
                            офертой
                        </a>
                    </label>
                    <button type="submit" className="form__submit">
                        Отправить форму
                    </button>
                    <span className="form__error" id="form__submit">
                        Упс, что-то пошло не так и форма не отправилась,
                        попробуйте ещё раз!
                    </span>
                </form>
    )
}

export default Form;