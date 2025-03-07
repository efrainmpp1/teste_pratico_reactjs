import React, { useState } from "react";
import { Link } from "react-router-dom";

const Exercise2 = () => {
  const [frase, setFrase] = useState("");
  const [resultado, setResultado] = useState(null);

  // Função para calcular a frequência das letras
  const calcularFrequenciaLetras = (input) => {
    // Normalizar a string: remover caracteres não alfabéticos e converter para minúsculas
    const apenasLetras = input.toLowerCase().replace(/[^a-z]/g, "");

    if (apenasLetras.length === 0) return "Nenhuma letra válida encontrada.";

    // Criar um objeto para armazenar a contagem das letras
    let contagemLetras = {};

    // Contar a frequência das letras
    for (let char of apenasLetras) {
      contagemLetras[char] = (contagemLetras[char] || 0) + 1;
    }

    // Calcular a porcentagem de ocorrência
    const totalLetras = apenasLetras.length;
    let frequencias = Object.entries(contagemLetras).map(([letra, count]) => ({
      letra,
      porcentagem: ((count / totalLetras) * 100).toFixed(2),
    }));

    // Ordenar do maior para o menor percentual
    frequencias.sort((a, b) => b.porcentagem - a.porcentagem);

    return frequencias;
  };

  // Manipula o evento do botão para processar a string
  const handleAnalisar = () => {
    if (frase.trim() === "") {
      setResultado("Por favor, insira uma frase válida.");
      return;
    }

    const resultadoFrequencia = calcularFrequenciaLetras(frase);
    setResultado(resultadoFrequencia);
  };

  return (
    <div className="container">
      <h1>Identificar a(s) Letra(s) Mais Frequente(s)</h1>
      <p>Digite uma frase e veja quais letras aparecem com mais frequência.</p>

      <textarea
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
        placeholder="Digite sua frase aqui..."
        maxLength={1000}
      />
      <button onClick={handleAnalisar}>Analisar</button>

      {resultado && (
        <div className="resultado">
          <h3>Frequência das letras:</h3>
          {typeof resultado === "string" ? (
            <p>{resultado}</p>
          ) : (
            <ul>
              {resultado.map((item, index) => (
                <li key={index}>
                  {item.letra}: {item.porcentagem}%
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="footer">
        <Link to="/">
          <button className="voltar-btn">Voltar para a página inicial</button>
        </Link>
      </div>
    </div>
  );
};

export default Exercise2;
