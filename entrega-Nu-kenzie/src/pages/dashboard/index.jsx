import { FinancialList } from "../../components/financialList";
import { FinancialCreateForm } from "../../components/financialCreateForm";
import logo from "../../assets/Nu Kenzie (3).svg";
import "./style.css";

export function Dashboard({
  setPages,
  financialRegister,
  addFinancialRegister,
  removeRegistryFromFinancialRegister,
}) {
  return (
    <div className="container">
      <header className="start-page">
        <img src={logo} alt="" />
        <button
          className="return-button"
          onClick={() => setPages("landingPage")}
        >
          Inicio
        </button>
      </header>
      <div className="container-main">
        <FinancialCreateForm addFinancialRegister={addFinancialRegister} />
        <div className="section-list">
          <FinancialList
            financialRegister={financialRegister}
            removeRegistryFromFinancialRegister={
              removeRegistryFromFinancialRegister
            }
          />
        </div>
      </div>
    </div>
  );
}
