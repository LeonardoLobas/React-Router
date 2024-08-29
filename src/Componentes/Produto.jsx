import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import React from "react";

const Produto = () => {
    const { id } = useParams();
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = response.json();
                setProduto(json);
            } catch (erro) {
                setError("Um erro aconteceu");
            } finally {
                setLoading(false);
            }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }, [id]);
    if (loading) return <div>Carregando...</div>;
    if (error) return <p>Error</p>;
    if (produto === null) return null;
    return (
        <div className={styles.Produto}>
            <h1>Produto</h1>
        </div>
    );
};

export default Produto;
