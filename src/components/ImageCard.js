import avatar1 from "../images/avatar1.JPG";
import avatar2 from "../images/avatar2.JPG";
import React from "react";


import { FaEdit, FaTrash } from "react-icons/fa";

const ImageCard = (props) => {
    return (
        <div>
            <img src={avatar1} width={"19%"}  />
            <img src={avatar2}  width={"100%"} />

            <br />
            <h5>This is a card</h5>
            <img src={avatar2} width={"53%"}  />
        </div>
    );
};

export default ImageCard;
