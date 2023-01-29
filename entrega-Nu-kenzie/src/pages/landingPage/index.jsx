import Logo from "../../assets/Nu Kenzie (2).svg";
import illustration from "../../assets/illustration.svg";
import "./style.css";

export function LandingPage({ setPages }) {
  return (
    <div className="container-page">
      <div className="text-container">
        <div>
          <img className="logoType" src={Logo} alt="" />
        </div>
        <span className="initial-text">
          Centralize o controle das suas finanças
        </span>
        <span className="secund-text">de forma rápida e segura</span>

        <button
          className="initial-button"
          onClick={() => setPages("Dashboard")}
        >
          Iniciar
        </button>
      </div>
      <div className="image-conatiner">
          <img className="illustration" src={illustration} alt="" />
        </div>
    </div>
  );
}
