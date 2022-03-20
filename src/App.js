import './App.css';
import Buttons from './components/Buttons/Buttons';
import NavTabs from './components/NavTabs/NavTabs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Material UI Practice</h1>
      <NavTabs />
      <Routes>
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </div>
  );
}

export default App;
