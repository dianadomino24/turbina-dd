import React, { useEffect, useState } from 'react'

export default function Release({ release, handleReleaseClick }) {
    function handleClick() {
        handleReleaseClick(release)
    }
    const feat = !release.originalAuthor ? "" : <span><span className="song-item__feat">feat.</span>{release.originalAuthor}</span>
    return (
        <li className="details__song-item" onClick={handleClick}>
            <div className="song-item__name-wrap song-item__name-wrap_type_release">
                {release.title}&nbsp;&mdash;&nbsp;{release.author} {feat}
            </div>
        </li>
    )
}
