import { useState } from "react";

import "./App.css";

import LogoImg from "./assets/logo.png";

export const App = () => {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo do fracasso.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!",
        "A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!",
        "Escreva em seu coração: todo dia é o melhor dia do ano.",
        "Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.",
        "As pessoas felizes são aquelas que sabem enxergar o lado bom em todas as coisas. Bom dia, povo",
        "Não existe nada melhor que começar cada manhã com um sorriso e muita positividade. Contagie todo mundo com a sua alegria hoje! Tenha um dia feliz!",
      ],
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        "Hora de apagar as luzes e de deixar que os anjos te conduzam para os melhores sonhos. Boa noite!",
        "Três ingredientes são fundamentais: fé, esperança e amor! Deus cuida do resto. Boa noite!",
        "A luz do luar parece ainda mais linda quando estamos apaixonados. Boa noite, meu amor!",
        "Acalme esse coração e confie mais no lindo caminho que a vida preparou para você. Boa noite!",
        "Boa noite! Que os sonhos te abracem e que acorde cheio de energia para um novo dia.",
        "Olhe para a lua e sinta todas as energias positivas que ela está te enviando. Boa noite",
        "Tenha uma boa noite de sono e fique tranquilo: Deus já preparou o caminho de amanhã.",
      ],
    },
  ];

  const handleSwitchCategory = (index: number) => {
    setCategoriaSelecionada(index);
  };

  const gerarFrase = () => {
    let numeroAlaeatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAlaeatorio]}"`
    );
  };

  return (
    <>
      <div className="container">
        <img className="logo" src={LogoImg} alt="logoFrases" />
        <h2 className="title">Categorias</h2>
        <section className="category-area">
          {allFrases.map((item, index) => (
            <button
              style={{
                borderWidth:
                  item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: "#1fa3db",
              }}
              className="category-button"
              key={item.id}
              onClick={() => handleSwitchCategory(index)}
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button className="button-frase" onClick={gerarFrase}>
          Gerar frase
        </button>

        {textoFrase !== "" && <p className="textoFrase">{textoFrase}</p>}
      </div>
    </>
  );
};
export default App;
