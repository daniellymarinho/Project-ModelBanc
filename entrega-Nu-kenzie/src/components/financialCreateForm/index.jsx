import React, { useState } from "react";
import "../../pages/dashboard/style.css"

export function FinancialCreateForm({ addFinancialRegister }) {
  const [formData, setFormData] = useState({
    description: "",
    value: [],
    valueType: "entrada",
  });

  function submit(event) {
    event.preventDefault();
    if (formData.description && formData.value) {
      addFinancialRegister(formData);
    } else {
      alert("Preencha os campos correamente para proseguir");
    }

    setFormData({
      description: "",
      value: "",
      valueType: "entrada",
    });
  }
  return (
    <form className="financial-form" onSubmit={submit} noValidate>
      <fieldset className="description-content">
        <label className="description-title" htmlFor="description">Descrição</label>
        <input
          id="description"
          type="text"
          onChange={(event) =>
            setFormData((currentForm) => ({ ...currentForm, description: event.target.value }))
          }
          value={formData.description}
          placeholder="Digite aqui sua descrição"
        />
        <span className="description-example">Ex: Compra de roupas</span>
      </fieldset>
      <div className="values-conteiner">
        <fieldset className="value-content">
          <label className="value-title" htmlFor="value">Valor</label>
          <input
            id="value"
            type="number"
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
            value={formData.value}
            placeholder="1          R$"
          />
        </fieldset>
        <fieldset className="type-content">
          <label className="type-value__title" htmlFor="valueType">Tipo de valor</label>
          <select
            name=""
            id="valueType"
            onChange={(event) =>
              setFormData({ ...formData, valueType: event.target.value })
            }
            value={formData.valueType}
          >
            <option  value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </fieldset>
      </div>

      <button className="submit-button" type="submit">Inserir valor</button>
    </form>
  );
}
