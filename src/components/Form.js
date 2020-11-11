import React from 'react'
import api from '../utils/Api'

function Form() {
    //значения инпутов
    const [inputValue, setInputValue] = React.useState(
        {
            name: '',
            telephone: '',
            email: '',
            poem: '',
            radio: false
        });
    // наличие ошибки при вводе данных
    const [inputError, setInputError] = React.useState({
        name: true,
        telephone: true,
        email: true,
        poem: true,
        radio: true
    });
    //состояние посещения инпута
    const [inputDirty, setInputDirty] = React.useState({
        name: false,
        telephone: false,
        email: false,
        poem: false
    });
    //валидность формы
    const [isValid, setIsValid] = React.useState(true);
    //состояние текста кнопки сабмита
    const [formButtonText, setFormButtonText] = React.useState('Отправить форму');
    //состояние ошибки отправки формы
    const [submitError, setSubmitError] = React.useState('');

    function blurHandler(e) {
        switch (e.target.name) {
            case 'name':
                setInputDirty({ ...inputDirty, name: true })
                break
            case 'telephone':
                setInputDirty({ ...inputDirty, telephone: true })
                break
            case 'email':
                setInputDirty({ ...inputDirty, email: true })
                break
            case 'poem':
                setInputDirty({ ...inputDirty, poem: true })
                break
        }
    }
    // проверка валидность всей формы
    React.useEffect(() => {
        if (!inputError.name & !inputError.telephone & !inputError.email & !inputError.poem & !inputError.radio) {
            setIsValid(false)
        } else { setIsValid(true) }
    }, [inputError]);

    //обработчик инпута имени
    function nameHandler(e) {
        setInputValue({ ...inputValue, name: e.target.value })
        if (e.target.value.length < 3) {
            setInputError({ ...inputError, name: true })
        } else { setInputError({ ...inputError, name: false }) }
    };
    //обработчик инпута телефона
    function telephoneHandler(e) {
        setInputValue({ ...inputValue, telephone: e.target.value });
        const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!regex.test(e.target.value)) {
            setInputError({ ...inputError, telephone: true })
        } else { setInputError({ ...inputError, telephone: false }) }
    };
    //обработчик инпута email
    function emailHandler(e) {
        setInputValue({ ...inputValue, email: e.target.value });
        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (!reg.test(e.target.value)) {
            setInputError({ ...inputError, email: true })
        } else { setInputError({ ...inputError, email: false }) }
    };
    //обработчик инпута текста стихотвонения
    function poemHandler(e) {
        setInputValue({ ...inputValue, poem: e.target.value })
        if (e.target.value.length < 20) {
            setInputError({ ...inputError, poem: true })
        } else { setInputError({ ...inputError, poem: false }) }
    };
    //обработчик радиокнопки
    function radioHandler() {
        if (inputValue.radio === false) {
            setInputValue({ ...inputValue, radio: true });
            setInputError({ ...inputError, radio: false })
        }
        else {
            setInputValue({ ...inputValue, radio: false });
            setInputError({ ...inputError, radio: true })
        };
    };
    //обработка и отправка формы на сервер
    function submitForm(evt) {
        evt.preventDefault();
        api.putInfo().then(() => {
            setFormButtonText('Ура, форма отправлена!');
        }).catch(() => {
            setSubmitError('Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!');
        })
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <h2 className="form__title">ФОРМА</h2>
            <p className="form__subtitle">
                Заполняя эту форму, вы становитесь частью проекта.
                    </p>
            <input
                type="text"
                onBlur={(e) => { blurHandler(e) }}
                style={(inputError.name & inputDirty.name) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { nameHandler(e) }}
                placeholder="Имя и фамилия автора"
                className="form__input"
                name="name"
                value={inputValue.name}
                required
            />
            <span className={`form__error ${(inputError.name & inputDirty.name) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
            </span>
            <input
                type="tel"
                onBlur={(e) => { blurHandler(e) }}
                style={(inputError.telephone & inputDirty.telephone) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { telephoneHandler(e) }}
                placeholder="Телефон"
                className="form__input"
                name="telephone"
                value={inputValue.telephone}
                required
            />
            <span className={`form__error ${(inputError.telephone & inputDirty.telephone) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
            </span>
            <input
                type="email"
                onBlur={(e) => { blurHandler(e) }}
                style={(inputError.email & inputDirty.email) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { emailHandler(e) }}
                placeholder="Почта"
                className="form__input"
                name="email"
                value={inputValue.email}
                required
            />
            <span className={`form__error ${(inputError.email & inputDirty.email) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
            </span>
            <textarea
                type="text"
                onBlur={(e) => { blurHandler(e) }}
                style={(inputError.poem & inputDirty.poem) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { poemHandler(e) }}
                placeholder="Стихи"
                className="form__input form__input_textarea"
                name="poem"
                value={inputValue.poem}
                required
            />
            <span className={`form__error ${(inputError.poem & inputDirty.poem) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
                    </span>
            <label htmlFor="offer" className="form__label">
                <input
                    type="radio"
                    className="form__input-radio"
                    checked={inputValue.radio}
                    onClick={radioHandler}
                    required
                />Согласен с &nbsp;
                        <a href="/#" className="form__link form__label">
                    офертой
                        </a>
            </label>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <button type="submit" className="form__submit" disabled={isValid} >
                    {formButtonText}
                </button>
                <span className="form__error form__error_visible" style={{ textAlign: "center" }}>
                    {submitError}
                </span>
            </div>
        </form>
    )
}

export default Form;