import React, { useState } from 'react';

const FormCadastro = () => {
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
    setLivro({
      ...livro,
      [name]: value,
    });
  };

  const cadastrarLivro = async () => {
    try {
      const response = await fetch('http://localhost:3001/livro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });

      if (response.ok) {
        console.log('Livro cadastrado com sucesso');

      } else {
        console.error('Erro ao cadastrar livro:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Trate o erro adequadamente
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cadastrarLivro();
  };

  return (
    <div>
      <h3>Cadastro de Livro</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input type="text" id="isbn" name="ISBN" value={livro.ISBN} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="Titulo" value={livro.Titulo} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" name="Autor" value={livro.Autor} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="anoPublicacao">Ano de Publicação:</label>
          <input
            type="text"
            id="anoPublicacao"
            name="AnoPublicacao"
            value={livro.AnoPublicacao}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="tema">Tema:</label>
          <input type="text" id="tema" name="Tema" value={livro.Tema} onChange={handleInputChange} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormCadastro;
