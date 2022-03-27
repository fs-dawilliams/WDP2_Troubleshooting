import React from 'react';
import Header from '../components/Header';

const Login = () => {
    const styles = useStyles();
    return (
        <div>
            <div>Welcome to ...</div>
            <p>Please join us!</p>
            <div>
            <form />
            <h6>Forgot your password? Sign In</h6>
            <h6>Already a member? Sign In</h6>
            </div>
     
    </div>
    );
}


export default Login;

const styles = {
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
};