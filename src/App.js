import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './api';



function App() {


  //  Essa Função vai coletar Dados na API dos Correios Cep e retornar uma respostas

  async function ColetaCep() {
    if (input === '') {
      alert('preencha algum cep por favor"');
      setInput("");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
      

    } catch {
      alert('Erro na busca!');
      setInput("");
  
    }
  }

  // fim da Função

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  return (
    <div className="container">
      <h1 className="title">Buscador CEP </h1>
      <div className="containerInput">
        <input type="text"
          placeholder="Digite Cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div>
          <button className="buttonSearch" onClick={ColetaCep}>
            <FiSearch size={25} />
          </button>
        </div>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>Cep: {cep.cep} </h2>
          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade}</span>
     
        </main>
      )}

    </div>
  );
}
export default App;
