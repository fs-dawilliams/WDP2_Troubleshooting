import React from "react";
import { FaBeer, FaFacebookMessenger, FaMailBulk } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";

import Avatar from "../images/avatar.png";

import { CgMail } from "react-icons/cg";

const AvatarComponent = (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.container}>
                <CgMail />
                <img
                    src={props.AvatarIcon}
                    alt={props.AvatarAlt}
                    style={(styles.myAvatar, styles.iconSpacing)}
                />
            </div>
        </div>
    );
};
export default AvatarComponent;

const styles = {
    backgroundColor: {
        backgroundColor: "white",
    },
};
