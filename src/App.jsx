import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Timeline from './views/Timeline';
import ButtonUsage from './views/Teste';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Timeline</Link> |{" "}
        <Link to="/teste">Teste</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Timeline/>} />
        <Route path="/teste" element={<ButtonUsage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;