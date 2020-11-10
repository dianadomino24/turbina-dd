import React from 'react'

function Form() {
    const [inputValue, setInputValue] = React.useState(
        {
            name: '',
            telephone: '',
            email: '',
            poem:''
        });
    // const [inputDirty, setInputDirty] = React.useState(
    //     {
    //         name: false,
    //         telephone: false,
    //         email: false,
    //         poem: false
        // });
    const [inputError, setInputError] = React.useState({
        name: false,
        telephone: false,
        email: false,
        poem: false
    });


    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'name':
    //             setInputDirty({ ...inputDirty, name: true })
    //             break
    //     };
    //     switch (e.target.telephone) {
    //         case 'telephone':
    //             setInputDirty({...inputDirty, telephone: true })
    //             break
    //     };
    //     switch (e.target.email) {
    //         case 'email':
    //             setInputDirty({ ...inputDirty, email: true })
    //             break
    //     };
    // }

    function nameHandler(e) {
        e.preventDefault();
        setInputValue({ name: e.target.value })
        if (e.target.value.length < 3) {
            setInputError({...inputError, name: true })
        } else { setInputError({...inputError, name: false }) }
    }

    function telephoneHandler(e) {
        e.preventDefault();
        setInputValue({ telephone: e.target.value });
        const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!regex.test(e.target.value)) {
            setInputError({ ...inputError, telephone: true })
        } else { setInputError({...inputError, telephone: false }) }
    }

    function emailHandler(e) {
        e.preventDefault();
        setInputValue({ email: e.target.value });
        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (!reg.test(e.target.value)) {
            setInputError({...inputError,  email: true })
        } else { setInputError({...inputError, email: false }) }
    }

    function poemHandler(e) {
        e.preventDefault();
        setInputValue({ poem: e.target.value })
        if (e.target.value.length < 20) {
            setInputError({...inputError, poem: true })
        } else { setInputError({...inputError, poem: false }) }
    }

    return (
        <form className="form">
            <h2 className="form__title">ФОРМА</h2>
            <p className="form__subtitle">
                Заполняя эту форму, вы становитесь частью проекта.
                    </p>
            <input
                type="text"
                // onBlur={(e) => { blurHandler(e) }}
                style={(inputError.name) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { nameHandler(e) }}
                placeholder="Имя и фамилия автора"
                className="form__input"
                name="name"
                value={inputValue.name}
                required
            />
            <span className={`form__error ${(inputError.name) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
                { console.log(inputError) }
                    </span>
            <input
                type="tel"
                // onBlur={(e) => { blurHandler(e) }}
                style={(inputError.telephone) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { telephoneHandler(e) }}
                placeholder="Телефон"
                className="form__input"
                name="telephone"
                value={inputValue.telephone}
                required
            />
            <span className={`form__error ${(inputError.telephone) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
                { console.log(inputError) }
                    </span>
            <input
                type="email"
                // onBlur={(e) => { blurHandler(e) }}
                style={(inputError.email) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { emailHandler(e) }}
                placeholder="Почта"
                className="form__input"
                name="email"
                value={inputValue.email}
                required
            />
            <span className={`form__error ${(inputError.email) ? 'form__error_visible' : ''}`}>
                Какая-то ошибка*
                { console.log(inputError) }
                    </span>
            <input
                type="text"
                style={(inputError.poem) ? { color: 'red' } : { color: 'black' }}
                onChange={(e) => { poemHandler(e) }}
                placeholder="Стихи"
                className="form__input"
                name="poem"
                value={inputValue.poem}
                required
            />
            <span className={`form__error ${(inputError.poem) ? 'form__error_visible' : ''}`}>
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