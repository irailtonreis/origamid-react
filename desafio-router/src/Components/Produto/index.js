import React from 'react'
import styles from './Produto.module.css'
import Head from '../Head'
import Button from '../Button';
import { useParams } from 'react-router-dom';


const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const { id } = useParams()

    React.useEffect(() => {
        async function fetchProduto(url){
            try {
                setLoading(true)
                const response =  await fetch(url)
                const json = await response.json()
                setProduto(json)
            } catch (error) {
                 setError("Um erro ocorreu!")   
            }finally{
                setLoading(false)
            }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

    if(loading) return <div className="loading"></div>
    if(error) return <p>{error}</p>
    if(produto === null) return null
    return (
        <section className={`${styles.produto} animeLeft`}>
            <Head title={`Ranek | ${produto.nome}`} description={`produto | ${produto.nome}`}  />
            <div> 
                {produto.fotos.map((foto) => (
                    <img key={foto.src} src={foto.src} alt={foto.titulo} srcset=""/>
                ))}
            </div>
                
            <div>
                <h1 className={styles.titulo}>{produto.nome}</h1>
                <span className={styles.preco}>{produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
                <Button width={100}>Comprar</Button>
            </div>
        </section>
    )
}

export default Produto
