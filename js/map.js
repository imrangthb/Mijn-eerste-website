let map = L.map('LMap').setView([51.23009, 4.41616], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();