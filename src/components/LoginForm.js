import React from "react";

const LoginForm = (props) => {
  
  return (
    <form key={props.id} style={styles.form}>
      <div>
        <h3>{props.username}</h3>
        <h3>{props.passwork}</h3>
      
      </div>
     
        <button style={styles.btn}>Sign In</button>
        <button style={styles.btn}>Register</button>
    </form>
  );
};
export default LoginForm;

const styles = {
  article: {
    backgroundColor: "#95A1B2",
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    padding: "10%",
    width: "100%",
    fontSize: "10px",
    textAlign: "center",
  },
  userSettings: {
    display: "flex",
    flexDirection: "column",
    padding: "3%",
    width: "5%",
  },
};