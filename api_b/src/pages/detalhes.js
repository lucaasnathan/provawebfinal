import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetalhesLivro = () => {
    const { ISBN } = useParams();
    const [livro, setLivro] = useState(null);
    const [alugado, setAlugado] = useState(false);

    useEffect(() => {
        const carregarLivro = async () => {
            const response = await fetch(`http://localhost:3001/livro/${ISBN}`);
            const data = await response.json();
            setLivro(data);
        };

        carregarLivro();
    }, [ISBN]);

    const handleAlugar = () => {
        if (alugado) {
            alert('Livro indisponível para aluguel.');
        } else {
            setAlugado(true);
            alert('Livro alugado com sucesso!');
        }
    };

    if (!livro) {
        return <div>Carregando...</div>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div>
                <h2>{livro.Titulo}</h2>
                <p>Autor: {livro.Autor}</p>
                <p>Ano de Publicação: {livro.AnoPublicacao}</p>
                <p>Tema: {livro.Tema}</p>
                {alugado ? (
                    <button disabled>Indisponível</button>
                ) : (
                    <button onClick={handleAlugar}>Alugar</button>
                )}
            </div>
        </div>
    );
};

export default DetalhesLivro;
