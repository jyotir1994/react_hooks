import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', logMousePosition)

        return() => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])    // [] for not always call useEffect after render
    return (
        <div>
            X- {x} Y- {y}
        </div>
    )
}

export default HookMouse
