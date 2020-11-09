import React from 'react'
import Player from './Player'
import LinksMenu from './LinksMenu'
import headerLogo from '../images/logo.svg'
import turbina from '../images/Турбина.svg'
import { maincolor } from '../utils/utils'

function Main() {
    return (
        <main className="content">
            <div className="head">
                <section className="turbina">
                    <div className="turbina__links">
                        <a href="https://marshakbooks.ru/" target="blank">
                            <img
                                src={headerLogo}
                                alt="Маршак"
                                className="turbina__logo"
                            />
                        </a>
                        <LinksMenu />
                    </div>
                    <h1 className="turbina__title">
                        <img
                            src={turbina}
                            alt="Турбина"
                            className="turbina__image"
                        />
                    </h1>
                </section>

                <Player />
            </div>
            <section className="information">
                <ul className="description">
                    <li className="description__element">
                        <h2 className="description__title">О ПРОЕКТЕ</h2>
                        <p className="description__subtitle">
                            Мы знаем, что наши дети постоянно существуют в
                            режиме непрекращающегося творческого процесса. Мы
                            видим это, когда ребёнок что-то напевает, когда он
                            бесконечно рисует, когда придумывает истории, когда
                            разговаривает с едой и игрушками — дети постоянно
                            включены и что-то изобретают. Родители часто
                            недооценивают это спонтанное творчество ребёнка. Это
                            не плохо, просто мы привыкаем к этому. Давайте
                            попробуем внимательнее присмотреться к нашим детям.
                        </p>
                        <p className="description__subtitle">
                            Мы запускаем проект «ТУРБИНА», который открывает
                            работу настоящего музыкального лейбла на базе
                            «Маршака». В рамках «ТУРБИНЫ» лучшие современные
                            инди-музыканты пишут свои песни на стихи, написанные
                            детьми. Здесь важно — мы не заставляем наших детей
                            садиться и писать поэзию, мы говорим о том, что
                            родителям стоит быть более внимательными и чуткими к
                            своим детям. Именно так мы сможем получить тексты,
                            которые перестанут быть детскими, не будут осмыслены
                            как взрослые — поэзия, которая сокращает дистанцию
                            между взрослостью и детством, где спонтанное детское
                            творчество и бессознательное, замеченное родителем,
                            становится общественным культурным достоянием.
                        </p>
                    </li>
                    <li className="description__element">
                        <h2 className="description__title">
                            КАК ЭТО РАБОТАЕТ?
                        </h2>
                        <p className="description__subtitle">
                            Вы можете прислать нам тексты, родившиеся у ваших
                            детей, которые вы записали и считаете, что это
                            сильное высказывание. Мы собираем пул таких текстов
                            и передаём их музыкантам. Артисты создают музыку на
                            эти стихи. Мы продюсируем выпуск трека, возможно
                            съёмки клипа и так далее. Мы всегда указываем автора
                            стихотворений внутри релиза: Хадн Дадн feat. Варя
                            Карпова и Федя Быстров — Контур.
                        </p>
                    </li>
                    <li className="description__element">
                        <h2 className="description__title">ТЕЗИСЫ</h2>
                        <ul className="proposition">
                            <li className="proposition__element">
                                Дети никогда не прекращают творить и круто
                                стараться быть на них похожими в этом.
                            </li>
                            <li className="proposition__element">
                                Детское бессознательное помогает родителям
                                понять, что происходит внутри семьи.
                            </li>
                            <li className="proposition__element">
                                Не существует детской и взрослой поэзии.
                                Существует мысль и чувство, зафиксированное в
                                ней.
                            </li>
                            <li className="proposition__element">
                                Дети получают невероятное удовольствие и
                                мотивацию от того, что их творчество
                                востребовано сверстниками и взрослыми.
                            </li>
                        </ul>
                    </li>
                </ul>
                <form className="form">
                    <h2 className="form__title">ФОРМА</h2>
                    <p className="form__subtitle">
                        Заполняя эту форму, вы становитесь частью проекта.
                    </p>
                    <input
                        type="text"
                        placeholder="Имя и фамилия автора"
                        className="form__input"
                        required
                    />
                    <span className="form__error">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="form__input"
                        required
                    />
                    <span className="form__error">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="email"
                        placeholder="Почта"
                        className="form__input"
                        required
                    />
                    <span className="form__error">
                        Какая-то ошибка*
                    </span>
                    <input
                        type="text"
                        placeholder="Стихи"
                        className="form__input"
                        required
                    />
                    <span className="form__error">
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
            </section>
        </main>
    )
}

export default Main
