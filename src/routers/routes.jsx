import { Routes, Route } from "react-router-dom";
import { Productos } from "../page/Productos";
import { Estadistica } from "../page/Estadisticas";
import { Diagramas } from "../page/Diagramas";
import { Reportes } from "../page/Reportes";
import { Home } from "../page/Home";

export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/estadisticas" element={<Estadistica />} />
        <Route path="/diagramas" element={<Diagramas />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    
  );
}