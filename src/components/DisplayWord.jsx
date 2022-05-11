import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayWord = () => {
        const {keyword}=useParams()
    return (
        <div>
            { 
                isNaN( keyword )? 
                <p>This is a word: {keyword} </p>:
                <p>This is a number: {keyword} </p>
            }
        </div>
    )
}

export default DisplayWord