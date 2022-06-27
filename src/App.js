import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
