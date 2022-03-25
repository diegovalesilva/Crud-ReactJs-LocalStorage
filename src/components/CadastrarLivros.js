import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CadastrarLivros = (props)=>{

  let navigate = useNavigate();
  
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [isbn, setIsbn] = useState('');

  const inserirLivro = (e) => {
    e.preventDefault();
    
    let id = props.livros.length + 1;

    if(props.livros.length > 0){
      id = props.livros[props.livros.length - 1].id + 1;
    }

    let livro = {
      id,
      titulo,
      autor,
      isbn
    }

    props.setLivros([...props.livros, livro]);
    setTitulo('');
    setAutor('');
    setIsbn('');

    navigate("/");
  }
 
  return(
    <div className='container'>
      <form onSubmit={inserirLivro}>
        <h4 style={{marginTop:'20px'}}>Cadastrar Livro</h4>

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
      
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>

    </div>
  );
}

export default CadastrarLivros;