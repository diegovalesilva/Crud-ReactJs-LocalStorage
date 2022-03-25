import React from 'react';
import {Link} from 'react-router-dom';

const TabelaLivros = ({livros, removerLivro})=>{
  
  return(
    <div className="container">
      <h4 style={{marginTop:'20px'}}>Livros Cadastrados</h4>
      {livros.length === 0 && <h2>Nenhum livro cadastrado!</h2>}
      {livros.length > 0 && (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
          <tr key={livro.isbn}>
            <td>{livro.isbn}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>
              <button className="btn btn-warning">
                <Link style={{color:'#000',textDecoration:'none'}} to={`/editar/${livro.isbn}`}>Editar</Link>
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => {
                removerLivro(livro);
              }}>Remover</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      )}

    </div>
  );
}

export default TabelaLivros;