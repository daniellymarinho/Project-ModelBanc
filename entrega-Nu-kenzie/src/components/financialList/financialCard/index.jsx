import trash from "../../../assets/trash.svg";
import "./style.css";

export function FinancialCard({
  registry,
  removeRegistryFromFinancialRegister,
}) {
  return (
    <div className="container-item">
      {registry.valueType === "entrada" ? (
        <span className="color-entry">.</span>
      ) : (
        <span className="color-out">.</span>
      )}

      <li className="list-item">
        <span className="description">{registry.description}</span>
        <span className="value-type">{registry.valueType}</span>
        <span className="value">{`R$ ${registry.value}`}</span>

        <button
          className="remove-button"
          onClick={() => removeRegistryFromFinancialRegister(registry.id)}
        >
          <img src={trash} alt="" />
        </button>
      </li>
    </div>
  );
}
