
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import SearchResult from './pages/search_result.jsx';
import CompanyQ from './pages/company_q.jsx';
import Greaterval from './pages/greater_val.jsx';
import Login from './components/Login.jsx'

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searchresult" element={<SearchResult/>}/>
        <Route path="/company_q" element={<CompanyQ/>}/>
        <Route path="/greaterval" element={<Greaterval/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
