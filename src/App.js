import './App.css';
import {Routes, Route,   BrowserRouter} from 'react-router-dom';
import Home from './Containers/Home/Home.js';

function App() {
  return (
<>
<BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
</>
  );
}

export default App;
