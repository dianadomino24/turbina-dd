import * as React from 'react'

function SvgArrowButton(props) {
  return (
    <svg className={props.className} width="24px" height="24px" viewBox="0 0 24 24" fill={props.maincolor} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm.64-15.768L12 7.698l-.64.534-6 5 1.28 1.536L12 10.302l5.36 4.466 1.28-1.536-6-5z"
      />
    </svg>
  )
}

export default SvgArrowButton
