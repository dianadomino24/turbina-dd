import * as React from 'react'

function SvgPlayButton(props) {
  return (
    <svg className={props.className} width="16px" height="20px" viewBox="0 0 16 20" fill={props.maincolor} {...props}>
      <path d="M15.258 8.625c.99.651.99 2.099 0 2.75l-12.696 8.35C1.464 20.448 0 19.662 0 18.35V1.65C0 .338 1.464-.447 2.562.275l12.696 8.35z" />
    </svg>
  )
}

export default SvgPlayButton
