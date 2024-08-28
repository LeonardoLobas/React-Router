import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Title from "./title";

const Contato = () => {
    return (
        <section className={styles.contato + " animaLeft"}>
            <Title title="Leo | Contato" description="Entre em Contato" />
            <img src={foto} alt="Máquina de escrever" />
            <div>
                <h1>Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>Eu sou o groot</li>
                    <li>777777777</li>
                    <li>Rua logo ali</li>
                </ul>
            </div>
        </section>
    );
};

export default Contato;
