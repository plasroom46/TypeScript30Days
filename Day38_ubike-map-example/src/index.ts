// src/index.ts

import L from 'leaflet';
import mapConfig from './map.config';
import fetchData from './fetchData';


const {
    coordinate, // 台北市座標
    zoomLevel, // 地圖預設縮放等級
    tileLayerURL, // 地圖的底圖
    containerID // 選擇 ID 為 'map' 的 HTML 元素
} = mapConfig;


// 建立 Leaflet 地圖個體，`map` 代表選擇 ID 為 'map' 的 HTML 元素
const map = L.map(containerID);

// 設定地圖要聚焦的座標與縮放等級
map.setView(coordinate, zoomLevel);

// 設定地圖的底圖並加到地圖的個體中
L.tileLayer(tileLayerURL).addTo(map);

// 使用 fetchData，由於 fetch 函數 回傳的是 Promise
// 因此必須接上 .then 印出資料
fetchData().then(data => {
    console.log(data);
});