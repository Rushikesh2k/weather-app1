import React, { useEffect, useState } from 'react';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'; 
import osm from "./osmprovider";
import "leaflet/dist/leaflet.css";
import L, { marker } from "leaflet";
import { isCompositeComponentWithType } from 'react-dom/test-utils';



const markerIcon = new L.Icon({
  iconUrl: require("./images/marker.png"),
  iconSize: [35,45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],

});

const App = () => {
  const [center, setCenter] = useState({ lat: 18.67276, lng: 73.88834 });
  // const [location, setLocation] = useState({lat: 19.0760 , lng: 72.8777});
  const ZOOM_Level = 9;

  useEffect( () => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=pune&appid=76653361368165277467cd5b85543b8e`
      const responce = await fetch(url);
      const resJson = await responce.json();
      setCenter(resJson.main);
    }
  })
  return (
    <div className="App" onChange={ (event) => {setCenter(event.target.value)}}>
      
      
      
      <MapContainer
        center = {center}
        zoom = {ZOOM_Level}
      >
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>

        <Marker 
          position={[18.67276, 73.88834]} 
          icon = {markerIcon}
          
          

          
        >

          <Popup  
               
              > 
              <p>temp</p>
              
            {/* <b>Here is the first marker</b> */}
          </Popup>

          
        </Marker>
      </MapContainer>
      
    </div>
  );
}

export default App;
