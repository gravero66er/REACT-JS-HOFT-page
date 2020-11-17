import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

const Ymap = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [56.83403256787968,60.62178299999999], zoom: 17 }} className="map" />
    </div>
  </YMaps>
);

export default Ymap;