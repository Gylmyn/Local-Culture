import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import PopUp from './PopUp';
import L from 'leaflet';

type PinProps = {
  position: [number, number];
  title : string
  id : number
}

const customIcon = new L.Icon({
  iconUrl: '/Loccation.svg',
  iconSize: [70, 70], 
  popupAnchor: [0, -36],
});

export default function Pin  (prop : PinProps){
  return (
    <Marker position={prop.position} icon={customIcon}>
      <Popup  maxWidth={317} >
        <PopUp title={prop.title} pinId={prop.id}/>
      </Popup>
    </Marker>
  );
};


