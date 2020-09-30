import React from 'react'
import Animation from './animacao';

export const index = () => {
    const [ativar, setAtivar] = React.useState(false)
    return (
        <div>
            <button onClick={() => setAtivar(!ativar)}></button>
            {ativar && <Animation />}
        </div>
    )
}
