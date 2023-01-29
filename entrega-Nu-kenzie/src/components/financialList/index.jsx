import { FinancialCard } from "../financialList/financialCard";
import loading from "../../assets/NoCard.png";
import { TotalMoney } from "./totalMoney";
import "./style.css";

export function FinancialList({
  financialRegister,
  removeRegistryFromFinancialRegister,
}) {
  return (
    <div className="container-list">
    
      <ul className="financial-list">
      <span className="list-title">Resumo financeiro</span>
      
        {financialRegister.length > 0 ? (
          <>
            <TotalMoney financialRegister={financialRegister} />
            
            {financialRegister.map((registry, index) => (
              <FinancialCard
                key={index}
                registry={registry}
                removeRegistryFromFinancialRegister={
                  removeRegistryFromFinancialRegister
                }
              />
            ))}
          </>
        ) : (
          <div className="no-registry">
            <p className="list-description">
              Você ainda não possui nenhum lançamento
            </p>
            <img src={loading} alt="" />
            <img src={loading} alt="" />
            <img src={loading} alt="" />
          </div>
        )}
      </ul>
    </div>
  );
}
