import React from 'react';
import PropTypes from 'prop-types';

// CameraView-komponentti näyttää valitun kameran kuvan.
const CameraView = ({ presetId }) => {
    return (
        <div className="Camera-selection-container">
            {/* Näytetään kameran kuva käyttämällä valittua presetId:tä osana URL:ia. */}
            <img
                src={`http://weathercam.digitraffic.fi/${presetId}.jpg`}
                alt={`Camera ${presetId}`} // Alt-teksti saavutettavuutta varten.
            />
        </div>
    );
};

// Määrittely komponentille välitettävistä propseista.
CameraView.propTypes = {
    presetId: PropTypes.string.isRequired // Kameraesiasetuksen ID, joka on pakollinen.
};

// Viedään komponentti, jotta sitä voidaan käyttää muissa tiedostoissa.
export default CameraView;
