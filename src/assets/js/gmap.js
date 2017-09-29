var map;
var creaxis = { lat: 1.27555, lng: 103.7957 };
var mapView = { lat: 1.2754321, lng: 103.793 };
//var iconBase = '../images/';

var stylesArray = [ 
    {
        featureType: 'all',
        stylers: [{
            saturation: -100
        }]
    },
    {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [{
            visibility: 'off'
        }]
    }, 
    {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            {
                hue: '#00ffee'
            },
            {
                saturation: 30
            }
        ]
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapView,
        zoom: 17,
        styles: stylesArray,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: creaxis,
        map: map,
        icon: 'http://creaxisdesign.com/images/pin.png'
    });
}

$(document).ready(function() {
    initMap();
});
