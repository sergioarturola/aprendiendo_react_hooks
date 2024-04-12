import { useState, useRef } from "react";
//http://via.placeholder.com/111x111



const [imagen, setImagen] = useState("nada");


function App() {

  const IMAGENES = {
    img1 : "http://via.placeholder.com/111x111",
    img2 : "http://via.placeholder.com/222X222",
    img3 : "http://via.placeholder.com/333X333"
  };

  return (
    <div>
      <button 
        type="button"
        onClick={() => setImagen("ciento 111")}
        >
        111x111
        </button>
        <button 
        type="button"
        onClick={() => setImagen("ciento 222")}
        >
        222x222
        </button>
        <button 
        type="button"
        onClick={() => setImagen("ciento 333")}
        >
        333x333
        </button>
        <p>Imagen seleccionada {imagen}</p>        
    </div>

  )


}

export default App
