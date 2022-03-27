import React from 'react';


const Breadcrumbs = () => {
    return (
        <nav style= {styles.bread}>
            <div style={styles.nav}>
                <button style={styles.btn}>Dashboard</button>
                <button style={styles.btn}>Profile</button>
                <button style={styles.btn}>Notication</button>
                <button style={styles.btn}>Messages</button>
            </div>
        </nav>
    )
}
export default Breadcrumbs;

const styles= {
    nav: {
        display: 'flex',
        flexDirection: 'row',
    },
    bread: {
        display: 'flex',
        flexDirection: 'row',
    },
    btn: {
        padding: '3%',
    }
}