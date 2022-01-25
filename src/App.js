import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import CashFlowPage from './views/CashFlowPage/CashFlowPage';
import ReportsPage from './views/ReportsPage/ReportsPage';
import Header from './components/Header/Header';
import Container from './components/Container';
import GoogleRedirectPage from './views/GoogleRedirectPage/GoogleRedirectPage';
import { authOperations } from './redux/auth';
// import { Toaster } from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cashflow" element={<CashFlowPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/google-redirect" element={<GoogleRedirectPage />} />
        </Routes>
      </Container>
      {/* <Toaster position="top-right" /> */}
    </>
  );
}

export default App;
