import React from 'react';
import styles from './styles.module.css';
import foto from  '../../img/contato.jpg';
import Head from '../Head';

const Contato = () => {
    return (
        <section className={`${styles.contato} animeLeft`}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={foto} alt="Máquina de escrever" />

            <div className={styles.dados}>
                <h1>Entre em contato.</h1>
                <ul>
                    <li>irailton.@gmail.com</li>
                    <li>99999-9999</li>
                    <li>Rua ali do lado, 898</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
