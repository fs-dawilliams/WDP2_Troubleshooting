
import { FaEye } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Sidebar = (props) => {
    return (
        <div style={styles.div}>

            <div>
                <NavLink>Newsfeed</NavLink>
                <NavLink>Messages</NavLink>
                
               

                <NavLink>NewPage</NavLink>
                        
                <NavLink><FaEye /></NavLink>
             
            </div>
        </div>
    );
};

export default Sidebar;

const styles = {
    div: {
        position: "fixed",
    },
};
