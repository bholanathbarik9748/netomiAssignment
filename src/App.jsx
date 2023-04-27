import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Form from './page/form'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/'  element={<Home />} />
          <Route path='/form'  element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
