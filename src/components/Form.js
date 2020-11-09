import React from 'react'

function Form(props) {
    return (
<form className="form">
                    <h2 className="form__title">ФОРМА</h2>
                    <p className="form__subtitle">
                        Заполняя эту форму, вы становитесь частью проекта.
                    </p>
                    <input
                        type="text"
                        placeholder="Имя и фамилия автора"
                        className="form__input"
                        name="userName" 
                        value={props.value}
                        required
                    />
                    <span className="form__error" id="">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="form__input"
                        name="telephone" 
                        value={props.value}
                        required
                    />
                    <span className="form__error" id="">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="email"
                        placeholder="Почта"
                        className="form__input"
                        name="email" 
                        value={props.value}
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
                        value={props.value}
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