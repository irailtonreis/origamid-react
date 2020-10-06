import React from 'react'
import styles from './Produtos.module.css'
import Head from '../Head'
import { Link } from 'react-router-dom';


const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(() => {
      fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json()).then(json => setProdutos(json))
    }, [])
    console.log(produtos)
    if(produtos === null) return null
    return (
        <section className={`${styles.produto} animeLeft`}>
            <Head title="Ranek" description="Produtos" />
            {produtos.map(p => (
                <Link to={`produto/${p.id}`} key={p.id}>
                    <img src={p.fotos[0].src} alt={p.fotos[0].title}/>
                    <h1>{p.nome}</h1>
                </Link>
            ))}
            
        </section>
    )
}

export default Produtos
