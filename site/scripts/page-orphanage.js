let options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//crete map

let map = L.map('mapid', options).setView([-25.5000668,-49.2740054], 15);

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



//create and add marker

L.marker([-25.5000668,-49.2740054], { icon }).addTo(map);
  
function selectimage(event) {
    let button = event.currentTarget

    // remover todas as classes .active
    let buttons = document.querySelectorAll(".images button")
    console.log(buttons)
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a image clicada
    let image = button.children[0]
    let imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar de volta a classe .active para este botao clikado
    button.classList.add('active')

}