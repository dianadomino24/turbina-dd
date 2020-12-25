import React from 'react'
import { footerLinkOfYandex } from '../utils/utils'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__subtitle">&#169; Маршак, 2020.</p>
      <p className="footer__subtitle">
        Сделано студентами&nbsp;
        <a href={footerLinkOfYandex} target="_blank" className="footer__link">
          Яндекс.Практикум
        </a>
      </p>
    </footer>
  )
}

export default Footer
