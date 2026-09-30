import './App.css'
import HeaderComponent from './components/HeaderComponent'
import EmployeeComponent from './components/EmployeeComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FundTransferComponent from './components/FundTransferComponent';

import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="app-container">
        <HeaderComponent />
        <main className="content">
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          {/* //http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          {/* //http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={ <EmployeeComponent /> }></Route>
          {/* //http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>
          <Route path='/fund-transfer' element={<FundTransferComponent />} ></Route>
        </Routes>
        </main>
        <FooterComponent />
        <ChatBot />
        </div>
      </BrowserRouter>
    </>
  )
}
export default App