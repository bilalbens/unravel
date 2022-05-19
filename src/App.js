import './App.css';
import LoginPage from './pages/LoginPage';
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import WelcomePage from './pages/WelcomePage';





function App() {
  return (
    <div className="App">
          

      <Header/>
        <Routes>
              <Route  path="/" element={<HomePage/> } />
              <Route  path="/home" element={<HomePage/> } />
              <Route  path="/login" element={<LoginPage/> } />
              <Route  path="/welcome" element={<WelcomePage/> } />
        </Routes>

      
    </div>
  );
}

export default App;
