import { useState } from "react";
import { LandingPage } from "./pages/landingPage";
import { Dashboard } from "./pages/dashboard";
import "./style/index.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [financialRegister, setFinancialRegister] = useState([]);
  const [pages, setPages] = useState("landingPage");

  function addFinancialRegister(registry) {
    const newRegistry = { ...registry, id: uuidv4() };
    setFinancialRegister([...financialRegister, newRegistry]);
  }

  function removeRegistryFromFinancialRegister(registryId) {
    if (confirm("Realmente deseja excluir esse registro financeiro?")) {
      const newFinancialRegister = financialRegister.filter(
        (registry) => registry.id !== registryId
      );
      setFinancialRegister(newFinancialRegister);
    }
  }

  return (
    <div className="App">
      {pages === "landingPage" ? (
        <LandingPage setPages={setPages} />
      ) : (
        <Dashboard
          setPages={setPages}
          financialRegister={financialRegister}
          addFinancialRegister={addFinancialRegister}
          removeRegistryFromFinancialRegister={
            removeRegistryFromFinancialRegister
          }
        />
      )}
    </div>
  );
}

export default App;
