import AddUser from './pages/AddUser'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Listing from './pages/Listing';
import Header from './Header'
import Edit from './pages/Edit'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element={<Listing/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
     {/* <AddUser/> */}
     
    </div>
  );
}

export default App;
