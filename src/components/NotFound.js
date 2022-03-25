import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>404!</h1>
      <p>
        Lamento. Essa página não existe ou foi removida <br/>
        <Link to="/">Voltar para Tabela de livros</Link>
      </p>
    </div>
  );
}

export default NotFound;