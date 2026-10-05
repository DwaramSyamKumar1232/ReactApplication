import './App.css';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { AuthProvider } from './auth/AuthContext';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeComponent from './components/EmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FundTransferComponent from './components/FundTransferComponent';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <HeaderComponent />

          <main className="content">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomeComponent />} />

              <Route
                path="/register"
                element={<RegistrationComponent />}
              />

              <Route path="/login" element={<LoginComponent />} />

              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/fund-transfer"
                  element={<FundTransferComponent />}
                />

                <Route
                  path="/employees"
                  element={<ListEmployeeComponent />}
                />

                <Route
                  path="/add-employee"
                  element={<EmployeeComponent />}
                />

                <Route
                  path="/edit-employee/:id"
                  element={<EmployeeComponent />}
                />
              </Route>

              {/* Unknown route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <FooterComponent />

          <ChatBot />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;