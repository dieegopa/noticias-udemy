import Formulario from "./components/Formulario";
import Header from "./components/Header";
import React from "react";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const [categoria, setCategoria] = React.useState("");
  const [noticias, setNoticias] = React.useState([])

  React.useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${process.env.REACT_APP_NOTICIAS_API_KEY}`
        const respuesta = await fetch(url)
        const noticias = await respuesta.json()
        setNoticias(noticias.articles)
      } catch (error) {
        console.log(error);
      }
    };

    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias}/>
      </div>
    </>
  );
}

export default App;
