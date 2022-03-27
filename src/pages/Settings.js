import React from 'react';

import Header from '../components/Header';

const Settings = () => {
    return (
        <div>
            <Header pageName='Settings' currentUser='Current User' />
            <h3 className={styles.container}>Settings</h3>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
};
export default Settings;