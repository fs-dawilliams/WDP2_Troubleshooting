import React from "react";
import AvatarComponent from "./AvatarComponent";
import AvatarIcon from "../images/avatar.png";
import { CgSearch } from "react-icons/cg";
import "../styles/fonts.css";
import { FcSettings } from "react-icons/fc";

const Header = (props) => {
    return (
        <header style={styles.headerWrapper}>
            <h1 style={styles.logoText}>{props.SiteName}</h1>

            <div >
                
                    <CgSearch size={"2rem"} style={styles.icons} />
                    <button style={styles.button}>Search</button>
                    <form>
                        <input />
                    </form>
                </div>

                <img
                    src={props.AvatarIcon}
                    alt={props.AvatarAlt}
                />

                <FcSettings size={"1.2rem"} />
            </div>
        </header>
    );
};
export default Header;

const styles = {
    myAvatar: {
        height: "75px",
        cursor: "pointer",
        borderRadius: "50%",
    },
    logoText: {
        display: "flex",
        marginLeft: "10%",
        alignItems: "center",
        justifyContent: "center",
        color: "#151515"
    },
};
