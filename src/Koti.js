import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import kuva1 from "./assets/kuva1.jpg";


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
    </div>
  );
};

export default Koti;
