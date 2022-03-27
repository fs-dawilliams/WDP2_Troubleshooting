import React from 'react';
import Header from '../components/Header';

const Notifi = () => {
    return (
        <div>
            <Header pageName='Notifcation' currentUser='Current User' />
            <h3 className={styles.layout}>Notifications</h3>
        </div>
    );
}

const useStyles = createUseStyles({
    layout: {
        height: '100px',
        backgroundColor: '#F7F7FF',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '50px'
    },
});
export default Notifi;