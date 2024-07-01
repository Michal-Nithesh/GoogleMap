// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Map Options & New Map
    map = new Map(document.getElementById("map"), {
        zoom: 8,
        center: position,
        mapId: "MAP_ID",
    });

    // Add marker
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
    });

    const infowindow = new google.maps.InfoWindow({
        content: '<h1>Lynn MA</h1>'
    });

    marker.addListerner('click', function () {
        infowindow.open(map, marker)
    });

}

initMap();
