import "./style.css";

export function TotalMoney({ financialRegister }) {

  const currentBalance = () =>
    financialRegister.reduce(
      (acc, registry) => acc + parseInt(registry.value),
      0
    );

  return (
    <div className="container-money">
      <div className="container-value">
        <span className="total-title">Valor total:</span>
        <span className="total-value">{`R$ ${currentBalance()}`}</span>
      </div>
      <span className="description-total__value">
        O valor se refere ao saldo
      </span>
    </div>
  );
}
