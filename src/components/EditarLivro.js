import React,{useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const EditarLivro = (props) => {
  
  const params = useParams();
  const navigate = useNavigate();
  
  const CurrentLivro = props.livros.find(livro => livro.isbn === params.isbnLivro);

  const id = CurrentLivro.id;
  const [titulo, setTitulo] = useState(CurrentLivro.titulo);
  const [autor, setAutor] = useState(CurrentLivro.autor);
  const [isbn, setIsbn] = useState(CurrentLivro.isbn);

  const editarLivro = (e) => {
    e.preventDefault();
    
    let livro = {
      id,
      titulo,
      autor,
      isbn
    }

    let index = props.livros.findIndex(p => p.id === livro.id);
    let newArray = props.livros.slice(0,index).concat(props.livros.slice(index + 1));
    let newLivros = [...newArray, livro].sort((a,b) => a.id - b.id);
    props.setLivros(newLivros);
    
    navigate("/");
  }

  return(
    <div className='container'>
      <form onSubmit={editarLivro}>
        <h4 style={{marginTop:'20px'}}>Editar Livro</h4>

        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN: Formato - (<span style={{color:"red"}}>978-85-7522-xxx-x</span>)</label>
          <input type="text" className="form-control" 
          id="isbn" autoFocus required pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$" 
          value = {isbn} onChange = {e => setIsbn(e.target.value)}   
          />
        </div>

        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" 
          required value={titulo}
          onChange = {e => setTitulo(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">Autor</label>
          <input type="text" className="form-control" id="autor" 
          required value={autor} 
          onChange = {e => setAutor(e.target.value)}
          />
        </div>
      
        <button type="submit" className="btn btn-primary">Editar</button>
      </form>

    </div>
  );

}

export default EditarLivro;