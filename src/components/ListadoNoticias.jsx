import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListadoNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((item) => {
        return <Noticia key={item.url} noticia={item} />;
      })}
    </div>
  );
};

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default ListadoNoticias;
