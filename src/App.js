import React from 'react';
// import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Income from './pages/Newpage';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import Routes from './components/Routes'

const App = () => {
  return (
    <div className={styles.container}>
      <div>
      <Navigation></Navigation>
      </div>
      <main className={styles.mainContent}>
        <div>
        <Header />
        </div>
        <div>

        
        <Routes />
        {/* <Routes >
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reports" element={<Reports />} />
          <Route path="saving" element={<Saving />} />
          <Route path="spending" element={<Spending />} />
          <Route path="settings" element={<Settings />} />
        </Routes> */}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
      display: "flex",
      flexDirection: "row",
      alignContent: 'center',
      justifyContent: 'space-between'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50px',
    height: '100vh',
    backgroundColor: '#153131',
  },
  logo: {
    fontSize: '24px',
    color: '#E6E2DD',
    paddingTop: '25px',
    "&:hover": {
      opacity: 0.5
    }
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E6E2DD',
    flexGrow: 100,
    height: '100vh',
    padding:'0 50px'
  }
};

export default App;
