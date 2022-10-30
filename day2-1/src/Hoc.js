import React from 'react'

const Hoc = (Component) => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return () => {
        return (
            <div style={{ backgroundColor: `rgb(${r},${g}, ${b})` }}>
                <Component />
            </div>
        )
    }
}

export default Hoc