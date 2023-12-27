import React, { ReactNode } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  center: [number,number];
  zoom: number;
  children: ReactNode;
}


export default function Map(prop : MapProps) {
  return (
    <MapContainer   markerZoomAnimation  zoomAnimation className='z-0' center={prop.center} zoom={prop.zoom} style={{ height: '100vh', width: '100%' }}>
      <TileLayer zIndex={1}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png
      />
      {prop.children}
    </MapContainer>
  )
}


