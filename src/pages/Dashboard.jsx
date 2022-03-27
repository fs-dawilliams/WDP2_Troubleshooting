import React from 'react';
import Header from '../components/Header';
import Barchart from '../components/BarChart';
import Piechart from '../components/PieChart';

const Dashboard = () => {
    const styles = useStyles();
    return (
        <div style={styles.layout}>
            <Header pageName='Dashboard' currentUser='Current user' />
            <div style={styles.format}>
                <Barchart style={styles.chart}></Barchart>
            </div>
            <div style={styles.format}>
                <Piechart></Piechart>
            </div>
        </div>
    );
}

const styles = {
    layout: {
        marginTop: '20px'
    },
    format: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '50px'
    },
};


export default Dashboard;
