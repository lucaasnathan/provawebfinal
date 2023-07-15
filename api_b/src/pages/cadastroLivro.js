import React, { useState } from 'react';
import axios from 'axios';

const CadastroLivro = ({ onCadastro }) => {
  const [livro, setLivro] = useState({
    ISBN: '',
    Titulo: '',
    Autor: '',
    AnoPublicacao: '',
    Tema: '',
    Alugado: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLivro((prevLivro) => ({
      ...prevLivro,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/livro/', livro);
      onCadastro(response.data);
      console.log('Livro cadastrado com sucesso:', response.data);
      setLivro({
        ISBN: '',
        Titulo: '',
        Autor: '',
        AnoPublicacao: '',
        Tema: '',
        Alugado: false,
      });
    } catch (error) {
      console.error('Erro ao cadastrar o livro:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Cadastro de Livro</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="Titulo" value={livro.Titulo} onChange={handleInputChange} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="autor">Autor:</label>
            <input type="text" id="autor" name="Autor" value={livro.Autor} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="anoPublicacao">Ano de Publicação:</label>
            <input
              type="text"
              id="anoPublicacao"
              name="AnoPublicacao"
              value={livro.AnoPublicacao}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="tema">Tema:</label>
            <input type="text" id="tema" name="Tema" value={livro.Tema} onChange={handleInputChange} />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroLivro;
