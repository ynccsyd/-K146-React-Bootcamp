import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p >
        <Link to="/">Go to Home </Link>
      </p>
      <p >Page not found :( !</p>
      <img  height={350}  width={500} src="https://i.imgur.com/qIufhof.png" />
         
    </div>
  )
}

export default Notfound
