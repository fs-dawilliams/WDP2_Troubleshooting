import React from 'react';
import Header from '../components/Header';


const NewPage = () => {
    return (
        <div>
            <Header pageName='New Page' currentUser='Current Username' />
            <h3 style={styles.container}>NewPage</h3>
        </div>
    );
}

const styles = {
    containers: {
        height: '100px',
        backgroundColor: 'whitesmoke',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '50px'
    },
};
export default NewPage;
