import React, { useEffect, useState } from 'react'

export default function Release({ release, handleReleaseClick }) {
  function handleClick() {
    handleReleaseClick(release)
  }
  return (
    <li className="details__song-item" onClick={handleClick}>
      <div className="song-item__name-wrap song-item__name-wrap_type_release">
        {release.title} &mdash; {release.author}
      </div>
    </li>
  )
}
