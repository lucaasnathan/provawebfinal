import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const carregarLivros = async () => {
            const response = await fetch('http://localhost:3001/livro');
            const data = await response.json();
            setLivros(data);
        };

        carregarLivros();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Biblioteca</h1>
            <div
                className="livro-grid"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    maxWidth: '1200px',
                }}
            >
                {livros.map((livro) => (
                    <div
                        key={livro.ISBN}
                        className="livro-card"
                        style={{
                            background: '#f5f5f5',
                            padding: '20px',
                            borderRadius: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                            minWidth: '200px',
                        }}
                    >
                        <h3>{livro.Titulo}</h3>
                        <p>Tema: {livro.Tema}</p>
                        <p>Ano de Publicação: {livro.AnoPublicacao}</p>
                        <Link to={`/detalhes/${livro.ISBN}`}>Detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
