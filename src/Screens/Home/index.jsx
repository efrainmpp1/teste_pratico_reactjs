import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Teste Prático</h1>
      <div className="exercises_list">
        <Link to="/exercise1">
          <button>Exercício 1 - Caixa Eletrônico</button>
        </Link>
        <Link to="/exercise2">
          <button>
            Exercício 2 - Identificar a(s) letra(s) mais Frequente(s)
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
