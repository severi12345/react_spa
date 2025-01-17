import React from 'react';
import PropTypes from 'prop-types';
import './camera-selection.css'; // Tyylitiedosto komponentille CameraSelection.

// Kameradata, joka sisältää kameran ID:t ja nimet. 
const cameras = [
    { presetId: '', name: '-' },
    { presetId: 'C0750301', name: 'Joensuu, Kamera 1' },
    { presetId: 'C0851001', name: 'Kuopio, Kamera 1' },
    { presetId: 'C0853301', name: 'Siilinjärvi, Kamera 1' },
    { presetId: 'C0857502', name: 'Ilomantsi, Kamera 1' },
    { presetId: 'C0852101', name: 'Varkaus, Kamera 1' }
];

// CameraSelection-komponentti mahdollistaa kameran valitsemisen dropdown-valikosta.
const CameraSelection = ({ selectedPresetId, onSelect }) => {
    // Funktio, joka kutsutaan, kun käyttäjä valitsee kameran.
    const selectionChanged = (event) => {
        console.log("Selected:" + event.target.value); // Debug-loki valitusta kamerasta.
        onSelect(event.target.value); // Kutsutaan yläkomponentin funktiota valinnalla.
    };

    return (
        <div className="Camera-selection-container">
            {/* Teksti ja valinta-valikko kameran valintaan. */}
            <div className="Camera-selection-text">
                Select camera to show:<br />
                <form>
                    <select onChange={selectionChanged} value={selectedPresetId}>
                        {/* Luodaan dropdown-vaihtoehdot kameradataan perustuen. */}
                        {cameras.map((cam, i) => (
                            <option key={'selection_' + i} value={cam.presetId}>
                                {cam.name}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};

// Määrittely vaadituista propseista.
CameraSelection.propTypes = {
    selectedPresetId: PropTypes.string.isRequired, // Valittu kameran esiasetus (ID).
    onSelect: PropTypes.func.isRequired // Funktio, joka kutsutaan valinnan muuttuessa.
};

// Komponentti viedään, jotta sitä voidaan käyttää muissa tiedostoissa.
export default CameraSelection;
