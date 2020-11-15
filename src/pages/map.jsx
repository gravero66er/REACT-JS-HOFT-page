import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

const Ymap = () => (
  <YMaps>
    <div className="map">
      <Map defaultState={{ center: [56.83403256787968,60.62178299999999], zoom: 18 }} width="100%" height="430px" />
    </div>
  </YMaps>
);

export default Ymap;