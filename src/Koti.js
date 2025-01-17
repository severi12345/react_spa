import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import kuva1 from "./assets/kuva1.jpg";
import styled from 'styled-components';
import { Scripts } from "react-router-dom";


// Define the styled Button component
const Button = styled.button`
  color: grey;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;

const Koti = () => {

  return (
    <div>
      <h2>Moikka</h2>
      <div>
        <div id="kuva1">
          <img src={kuva1} width={350} height={250} alt="kuva2"></img>
        </div>
           <FontAwesomeIcon icon={faPrint} style={{ fontSize: '24px'}}/>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EcLPNGLRHU8?si=IjQW8vhhdwbU8VIe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* Add the styled button here */}
      <div>
        <br></br>
        <Button>Click Me</Button>
      </div>
    </div>
  );
};

export default Koti;
