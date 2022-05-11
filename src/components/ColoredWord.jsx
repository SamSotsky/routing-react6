import React from 'react'
import {useParams} from 'react-router-dom'

const ColoredWord = () => {
    const {color, word}= useParams()
    return (
        <div>
            <p style={{ color: color }}>The word is: {word} </p>
        </div>
    )
}

export default ColoredWord