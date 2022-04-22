import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from "./Components/Navbar/Navbar"
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
