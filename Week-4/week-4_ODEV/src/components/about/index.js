import React from "react";
import 'react-accessible-accordion/dist/fancy-example.css';
export default function About(props) {
  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#2f2868",
    border: "2px solid",
    borderColor: props.mode === "light" ? "black" : "white",
  };
  return (
    <div className="container my-3" >
        <h2 style={{color: props.mode==='light'?'black':'white'}}>About Me</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
              >
              Who I am?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>Hi! My name is Şeyda. I am an Electrical and Electronics Engineer and have a Master 
                degree in Energy Science and Technologies.
                I am interested in Programming Languages.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={myStyle}>
              Why I am here
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>This is my 4th Week REACT task.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={myStyle}>
            Which languages I know?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>
                <ul>
                  <li>English</li>
                  <li>Italian</li>
                  <li>Persian</li>
                </ul>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
