import React, { useState } from "react";
import "../styles/feedstyles.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const FeedCard = (props) => {

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img
                                    src={props.avatar2}
                                />

                                <div>
                                    <span>{props.userName}</span>{" "}
                                    <span>
                                        {props.userDescriptiom}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <small >60 mins</small> <br />
                                <i ="fa fa-ellipsis-h"></i>
                                <br />
                                <FaEdit />
                                <FaTrash style={{ paddingLeft: "2px" }} />
                            </div>
                        </div>
                        <img src={props.avatar2} />
                        <div>
                            <p>{props.userPost}</p>

                        </div>
                    </div>
                </div>
            </div>
     
    );
};

export default FeedCard;
