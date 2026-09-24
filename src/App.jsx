import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Timeline from './views/Timeline';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Timeline</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Timeline/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;