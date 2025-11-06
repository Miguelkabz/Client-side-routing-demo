import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Bloog from './pages/Blog';
import Counterattack from './components/Counterattack';
import ToDoList from './pages/ToDoList';
import todos from './asserts/Data';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoPage from './pages/ToDoPage';

function App() {
  return (
    <div className="App">
      

      
      <BrowserRouter>
        <Navbar/>
        The Web app is clean and Running
        <Routes>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/blog' element= {<Bloog/>}/>
          <Route path='/counterattack' element= {<Counterattack/>}/>
          <Route path='/todoList' element= {<ToDoList/>}/>
          <Route path='/todo/:id' element= {<ToDoPage todos={todos}/>}/>

        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
