import React from 'react';
import Dashboard from '../pages/Dashboard';
import Newpage from '../pages/Newpage';
import Reports from '../pages/Reports';
import Login from '../pages/Login';
import Settings from '../pages/Settings'
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineSavings } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className={styles.nav}>
            <div>
                <Link to="/" element={<Dashboard />} className={styles.logo}><MdOutlineDashboard /></Link>
            </div>
            <Link to="/" element={<Dashboard />}  className={styles.navItem}><MdOutlineDashboard /></Link>
            <Link to="/login" element={<Login />}  className={styles.navItem}><MdOutlineDashboard /></Link>
            <Link to="/newPage" element={<NewPage />}  className={styles.navItem}><MdOutlineDashboard /></Link>
            <Link to="/notifiication" element={<Notification />}  className={styles.navItem}><MdOutlineDashboard /></Link>
            <Link to="/settings" element={<Settings />} className={styles.navItem}><MdOutlineDashboard /></Link>
        </nav>
    );
}

export default Navigation;


const styles = {
    nav: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        padding: '25px'
    },
    navItem: {
        textDecoration: 'none',
        padding: '5px',
        marginTop: '15px',
        fontSize: '24px',
        color: '#136F63',
        "&:hover": {
            opacity: 0.5
        }
    }
};