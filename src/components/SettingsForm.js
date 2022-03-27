import React from "react";
import Avatar from "./Avatar"

import MainBtn from "./btns/MainBtn";
const SettingsForm = () => {
    return(
        <section>
            <header>
                <Avatar avaImg={props.ava} avaAlt="Avatar" avaH="180" avaW="180"/>
                <h2>{props.fName} {props.lName}</h2>
            </header>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="fName">First Name</label>
                        <input id="fName" type="text" value={props.fName} />
                    </div>
                    <div>
                        <label htmlFor="lName">Last Name</label>
                        <input id="lName" type="text" value={props.lName} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" value={props.phone} />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" value={props.street} />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" value={props.city} />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" type="text" value={props.state} />
                    </div>
                    <div >
                        <label htmlFor="zip">Zip Code</label>
                        <input id="zip" type="text" value={props.zip} />
                    </div>
                </fieldset>
                <fieldset>
                    <div >
                        <label htmlFor="userName">Username</label>
                        <input id="userName" type="text" value={props.userName} />
                    </div>
                    <div>
                        <label htmlFor="passwd">Password</label>
                        <input id="passwd" type="password" value={props.passwd} />
                    </div>
                </fieldset>
                <div>
                    <MainBtn btnTxt="Edit Profile"/>
                </div>
            </form>
        </section>
    )
}

export default SettingsForm;