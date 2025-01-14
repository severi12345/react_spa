// Tuodaan React-kirjasto, joka mahdollistaa komponenttipohjaisen kehittämisen.
import React from 'react';
// Tuodaan ReactDOM, joka tarjoaa työkaluja React-sovelluksen liittämiseksi DOM:iin.
import ReactDOM from 'react-dom/client';
// Tuodaan tyylitiedosto 'index.css', joka sisältää sovelluksen tyylit.
import './index.css';
// Tuodaan pääkomponentti Main, joka toimii sovelluksen ytimenä.
import Main from '././Main';

// Luodaan juurielementti sovellukselle käyttämällä ReactDOM:n createRoot-metodia.
// Etsitään HTML-tiedostosta elementti, jonka id on 'root', ja liitetään React-sovellus siihen.

const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderöidään React-komponentit juurielementtiin.
// StrictMode on työkalu, joka auttaa tunnistamaan mahdollisia ongelmia sovelluksessa.
root.render(
  <React.StrictMode>
    {/* Renderöidään Main-komponentti, joka sisältää sovelluksen sisällön. */}
    <Main />
  </React.StrictMode>
);
