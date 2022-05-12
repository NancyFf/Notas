import { useState } from "react";

function App() {
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
    limpiar: "",
  });

  const handleResetClick = (v) =>{
    setInputState({titulo: "",
    fecha: "",
    nota: "",
    limpiar: "", });
  };

  const handleInputChange = (event) => {
    //console.log(event.target);
    setInputState({ ...inputState, [event.target.name]: event.target.value, });
    console.log(event.target);
  };

  const handleClicklimpiar = () =>{
    setInputState({title: "", date: "", note:""});
  };
  
  return (
  <div className="App container">
    <div className="row">
      <div className="col">
        <h3> lista</h3> 
      </div>
      <div className="col">
      <h3>Bienvenidos a mi Block de Notas</h3>
      <label  className="mb-2">
        Titulo
      <input
        id="titulo"
        name="titulo"
        type="text"
        onChange={handleInputChange}
        value={inputState.titulo}
      />
      </label >
      <br />
      <label  className="mb-2">
        Fecha
      <input
          id="date"
          name="date"
          type="text"
          onChange={handleInputChange}
          value={inputState.date}
        />
      </label>
      <br />
      <label>
        Nota
        <input
          id="note"
          name="note"
          type="text"
          onChange={handleInputChange}
          value={inputState.note}
        />
      </label>
    </div>
  </div>
  <hr />
  <div className="row">
    <button
      type="button"
      className="btn btn-prymary" 
      onClick={handleClicklimpiar}
    >
      limpiar
      </button>
     </div>
    </div>
  );
}
export default App;