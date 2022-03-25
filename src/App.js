import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import TabelaLivros from './components/TabelaLivros';
import CadastrarLivros from './components/CadastrarLivros';
import EditarLivro from './components/EditarLivro';
import NotFound from './components/NotFound';

const getData = () => {
  const data = localStorage.getItem('livros');
  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }
}

const App = () => {
  
  const [livros, setLivros] = useState(getData());

  useEffect(()=>{
    localStorage.setItem('livros', JSON.stringify(livros));
  }, [livros]);

  const removerLivro = livro => {
    if(window.confirm("Remover esse Livro?")){
      let filtroLivros = livros.filter(p => p.isbn !== livro.isbn);
      setLivros(filtroLivros);
    }
  }

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<TabelaLivros livros={livros} 
        removerLivro = {removerLivro}/>} />
        <Route path="/cadastrar" element={<CadastrarLivros 
        livros={livros} setLivros={setLivros}/>} 
        />
        <Route path="/editar/:isbnLivro" element={
          <EditarLivro livros={livros} setLivros={setLivros}/>} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
  
}

export default App;
