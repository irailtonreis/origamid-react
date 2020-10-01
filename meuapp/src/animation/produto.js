import React from 'react'

const Produto = () => {
    const [ativar, setAtivar] = React.useState(false)

    return (
        <>
        <button onClick={() => setAtivar(!ativar)}>Toggle Ativar</button>
            {ativar && <div className="animeLeft">animação react</div>} 
        </>
    )
}


export default Produto 