
import React from "react";
import Sidebar from './Sidebar';


const Body = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Sidebar />
                </div>

                <div style={styles.main}>
                    THis is the body of text.
                </div>
                <div style={styles.content}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Body;

const styles = {
    main: {
        position: "fixed",
        right: "0",
    },
    content: {
        marginLeft: "auto",
    },
};
