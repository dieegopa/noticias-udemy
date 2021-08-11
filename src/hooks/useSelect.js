import React from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, setState] = React.useState(stateInicial);

  const SelectNoticias = () => {
    return (
      <select
        className="browser-default"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        {opciones.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  };

  return [state, SelectNoticias];
};

export default useSelect;
