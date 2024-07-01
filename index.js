// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: 8.0866137, lng: 77.55444119999993 };
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
    /* const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
    });

    const infowindow = new google.maps.InfoWindow({
        content: '<h1>Lynn MA</h1>'
    });

    marker.addListerner('click', function () {
        infowindow.open(map, marker)
    });*/

    addMarker({ position });
    addMarker({
        coords: { lat: 13.05558, lng: 80.2837 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        conten: '<h1>KanyaKumari</h1>'
    });

    // Add Marker Function
    function addMarker(props) {
        const marker = new AdvancedMarkerElement({
            map: map,
            position: props.coords,
            // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            // icon: props.iconImage
        });

        // Check for Custom Icon
        if (props.iconImage) {
            //Set icon Image
            marker.setIcon(props.iconImage);
        }

        //check Content
        if (props.conten) {
            const infowindow = new google.maps.InfoWindow({
                content: props.conten
            });

            marker.addListerner('click', function () {
                infowindow.open(map, marker)
            });
        }
    }

}

initMap();
