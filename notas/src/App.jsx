function App(){
  //Todo: presentar el concepto de "state"//
  let varprueba ="Titulo";
  
  const handleChangePrueba= (event) => { 
  varprueba = event.target.value;
  };
  
  return (
  <div className="App">
  <h3>NOtas</h3>
  <label htmlFor="PruebaID">Input de prueba</label>
  <input 
  id="PruebaID" 
  name="prueba" 
  type="text"
  anChange={handleChangePrueba}
  value={varprueba}
  />
  </div>
  );
  }
  export default App;
  