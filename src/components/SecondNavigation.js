import avatar1 from "../images/avatar1.JPG";
import avatar2 from "../images/avatar2.JPG";
import React from "react";



const SecondNavigation = (props) => {
    return (
        <SideNav expanded style={styles.sideNav}>
           <li>item 1</li>
           <li>item 2</li>
           <li>item 3</li>
        </SideNav>
    );
};

export default SecondNavigation;

const styles = {
    sideNav: {
        marginTop: "5rem",
        padding: "0",
        margin: "0",
        clear: "both",
        listStyle: "none",
        width: "100%",
        backgroundColor: "red !important",
        height: "100%",
        position: "absolute",
    },
    sideContainer: {
        overflow: "hidden",
    }
};
