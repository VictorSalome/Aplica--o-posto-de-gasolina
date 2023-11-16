import LogoImg from "./assets/Fuelstation-amico.svg";

import "./App.css";
import { FormEvent, useState } from "react";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState();
  const [alcoolInput, setAlcoolInput] = useState();
  const [info, setInfo] = useState<InfoProps>();

  const calcular = (event: FormEvent) => {
    event.preventDefault();

    const calculo = alcoolInput / gasolinaInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  };

  const formatarMoeda = (valor: number) => {
    const valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  };

  return (
    <>
      <main className="container">
        <img src={LogoImg} alt="Logo calculadora" className="logo" />
        <h1 className="title">Qual a melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label className="label">Álcool (preço por litro):</label>
          <input
            type="number"
            className="input"
            placeholder="Insira o valor do Álcool"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label className="label">Gasolina (preço por litro):</label>
          <input
            type="number"
            className="input"
            placeholder="Insira o valor da gasolina"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className="button" type="submit" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>

            <span> Álcool {info.alcool}</span>
            <span> Gasolina {info.gasolina}</span>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
