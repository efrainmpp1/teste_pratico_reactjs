import React, { useState } from "react";

const Exercise1 = () => {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);

  // Função para calcular a menor quantidade de cédulas necessárias
  const calcularNotas = (valor) => {
    const notasDisponiveis = [20, 10, 5, 1];
    let restante = parseInt(valor, 10); // Convertendo para inteiro
    let notasDistribuidas = {};

    // Percorre cada nota e calcula a quantidade necessária
    notasDisponiveis.forEach((nota) => {
      if (restante >= nota) {
        notasDistribuidas[nota] = Math.floor(restante / nota);
        restante %= nota; // Atualiza o restante do valor a ser sacado
      }
    });

    return notasDistribuidas;
  };

  // Manipula o evento do botão para processar o saque
  const handleSaque = () => {
    if (valor.trim() === "" || isNaN(valor) || parseInt(valor, 10) <= 0) {
      setResultado("Por favor, insira um valor válido maior que zero.");
      return;
    }

    const resultadoNotas = calcularNotas(valor);
    setResultado(resultadoNotas);
  };

  return (
    <div>
      <h1>Caixa Eletrônico</h1>
      <p>Insira o valor desejado para saque:</p>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Digite um valor"
      />
      <button onClick={handleSaque}>Sacar</button>

      {resultado && (
        <div>
          <h3>Notas entregues:</h3>
          {typeof resultado === "string" ? (
            <p>{resultado}</p>
          ) : (
            <ul>
              {Object.entries(resultado).map(([nota, quantidade]) => (
                <li key={nota}>
                  {quantidade} nota(s) de R$ {nota},00
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Exercise1;
