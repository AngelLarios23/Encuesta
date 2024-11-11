import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encuesta from "./compontentes/integradora";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element= {<Encuesta/>}/>
    </Routes>    
    </Router>
  );
}

export default App;
