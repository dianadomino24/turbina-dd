import * as React from 'react'

function SvgPauseButton(props) {
  return (
    <svg
      className={props.className}
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      fill={props.maincolor}
      {...props}
    >
      <rect x={2} width={4} height={16} rx={1} />
      <rect x={11} width={4} height={16} rx={1} />
    </svg>
  )
}

export default SvgPauseButton
