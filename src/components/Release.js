import React, { useEffect, useState } from 'react'

export default function Release(release) {
    return (
        <li className="details__song-item">
            <div className="song-item__name-wrap song-item__name-wrap_type_release">
                {release.name} &mdash; {release.author}
            </div>
        </li>
    )
}
