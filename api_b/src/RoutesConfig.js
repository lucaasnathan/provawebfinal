import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detalhes from './pages/detalhes';
import CadastroLivro from './pages/cadastroLivro';

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detalhes/:ISBN' element={<Detalhes />} />
      <Route path='/cadastro-livro' element={<CadastroLivro />} />
      <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
    </Routes>
  );
}
