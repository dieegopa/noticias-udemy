import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Formulario = ({ setCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "bussiness", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarNoticias = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`row  ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={(e) => buscarNoticias(e)}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              value="Buscar"
              className={`btn-large darken-2  ${styles["btn-block"]}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
};

export default Formulario;
