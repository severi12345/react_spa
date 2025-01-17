import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'; // Tyylitiedosto, joka määrittää komponentin ulkoasun.
import CameraSelection from './CameraSelection/camera-selection'; // Kamera-valintakomponentti.
import CameraView from './CameraView/camera-view'; // Kamera-näkymäkomponentti.

// Kamera-komponentti, joka toimii sovelluksen pääkomponenttina.
const Kamera = () => {
  // Tilanhallinta valitun kameran esiasetuksen ID:lle.
  const [selectedPresetId, setSelectedPresetId] = useState(null);

  // Käsittelijä, joka päivittää valitun esiasetuksen ID:n.
  const cameraSelected = (value) => {
    setSelectedPresetId(value);
  };

  return (
    <div className="kamera">
      {/* Otsikko, joka kuvaa sovelluksen toimintaa. */}
      <div className="kamera-header">
        <h2>Traffic Camera Viewer - Tampere</h2>
      </div>
      {/* Kamera-valintakomponentti, jolle välitetään valittu ID ja valintafunktio. */}
      <CameraSelection
        selectedPresetId={selectedPresetId}
        onSelect={(value) => cameraSelected(value)}
      />
      {/* Näyttää kameranäkymän vain, jos jokin esiasetus on valittu. */}
      {selectedPresetId && (
        <div className="camera-container">
          <CameraView presetId={selectedPresetId} />
        </div>
      )}
    </div>
  );
};

// PropTypes määrittelee komponentin saamat propsit.
Kamera.propTypes = {
  selectedPresetId: PropTypes.string,
};

// Komponentti viedään, jotta sitä voidaan käyttää muissa tiedostoissa.
export default Kamera;
