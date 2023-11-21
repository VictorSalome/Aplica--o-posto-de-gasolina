import { useState } from "react";

import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [idade, setIdade] = useState(null);
  const [nomeFixo, setNomeFixo] = useState("");

  const idadeCalculada = () => {
    const anoAtual = new Date().getFullYear();
    const anoInserido = parseInt(ano);
    const idade = anoAtual - anoInserido;
    setIdade(idade);

    if (!nomeFixo) {
      setNomeFixo(nome);
    }

    setNome("");
    setAno("");
  };

  return (
    <>
      <div className="container">
        <h1>Descubra sua idade</h1>

        <section className="conjunto">
          <div className="sub-conjunto">
            <h4>Digite seu nome?</h4>
            <input
              value={nome}
              type="text"
              placeholder="Digite seu nome..."
              onChange={(e) => setNome(e.target.value)}
            />

            <h4>Digite o ano que nasceu?</h4>
            <input
              value={ano}
              type="text"
              placeholder="Digite o ano do nascimento..."
              onChange={(e) => setAno(e.target.value)}
            />

            <button onClick={idadeCalculada}>Descobrir idade</button>
            {idade !== null && (
              <h2>
                <span>{nomeFixo} tem {idade} anos</span>
              </h2>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
