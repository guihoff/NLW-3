//crete map

const map = L.map('mapid').setView([-25.5000668,-49.2740054], 15);

//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{}).addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "../images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

// crete popup overlay
const popup = L.popup( {
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="../images/arrow-white.svg" </a>')

//create and add marker

L
    .marker([-25.5000668,-49.2740054], { icon })
    .addTo(map)
    .bindPopup(popup)
