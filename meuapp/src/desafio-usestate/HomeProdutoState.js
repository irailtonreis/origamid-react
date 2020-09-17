import React from 'react';
import ProdutoState from './ProdutoState';


const HomeProdutoState = () => {
    const [produto, setProduto] = React.useState(null);
  
    React.useEffect(() => {
      const produtoLocal = window.localStorage.getItem('produto');
      if (produtoLocal !== 'null') setProduto(produtoLocal);
    }, []);
  
    React.useEffect(() => {
      if (produto !== null) window.localStorage.setItem('produto', produto);
    }, [produto]);
  
    function handleClick({ target }) {
      setProduto(target.innerText);
    }
  
    return (
      <div>
        <hr/>
        <h1>Preferência: {produto}</h1>
        <button style={{ marginRight: '1rem' }} onClick={handleClick}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>
        <ProdutoState produto={produto} />
      </div>
    );
  };
  
  export default HomeProdutoState;