import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

const Ymap = () => (
  <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [56.83403256787968,60.62178299999999], zoom: 15 }} width="300px"/>
    </div>
  </YMaps>
);

export default Ymap;