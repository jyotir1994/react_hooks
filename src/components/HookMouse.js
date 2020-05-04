import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', logMousePosition)
    }, [])    // [] for not always call useEffect after render
    return (
        <div>
            X- {x} Y- {y}
        </div>
    )
}

export default HookMouse
