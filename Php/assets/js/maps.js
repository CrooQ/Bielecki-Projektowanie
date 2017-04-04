$(function() {
    
    var silver_map = [
        {
            "elementType": "geometry",
            "stylers": [{
                    "color": "#f5f5f5"
                }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                    "visibility": "off"
                }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#616161"
                }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "color": "#f5f5f5"
                }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#bdbdbd"
                }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#eeeeee"
                }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#757575"
                }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#e5e5e5"
                }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#9e9e9e"
                }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#ffffff"
                }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#757575"
                }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#dadada"
                }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#616161"
                }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#9e9e9e"
                }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#e5e5e5"
                }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#eeeeee"
                }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#c9c9c9"
                }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "color": "#9e9e9e"
                }]
        }];
    
  
    $(function initMap() {
    
        var position = {lat: 50.990741, lng: 17.218622};
        var map = new
        google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.988541, lng: 17.218662},  //position,
            scrollwheel: false,
            zoom: 15,
            //disableDefaultUI: true,
            styles: silver_map,
        });
        
        
        var image = '/wp-content/themes/Bielecki/assets/images/google_marker.png';
        var greyMarker = new google.maps.Marker({
            position: position,
            animation: google.maps.Animation.BOUNCE,
            map: map,
            icon: image
        });
        
        var  pathWroclaw = [
            {lat: 50.988748, lng: 17.214684}, // road 94 from Wrocław
            {lat: 50.987387, lng: 17.216915}, // crossroad 94 and Cicha
            {lat: 50.989690, lng: 17.218988}, // turn to posesion
            {lat: 50.989960, lng: 17.218273}, // private road
            {lat: 50.990149, lng: 17.218246}, // private road
            {lat: 50.990770, lng: 17.218745} // destination point
        ];
        
        var pathOlawa = [
            {lat: 50.986421, lng: 17.218611}, // road 94 from Oława
            {lat: 50.987387, lng: 17.216915}, // crossroad 94 and Cicha
        ];
        var pathFromWroclaw = new google.maps.Polyline({
            path: pathWroclaw,
            geodesic: true,
            strokeColor: '#b5b5b5',
            strokeOpacity: 0.8,
            strokeWeight: 3
        });

        pathFromWroclaw.setMap(map);
        
        var pathFromOlawa = new google.maps.Polyline({
            path: pathOlawa,
            geodesic: true,
            strokeColor: '#b5b5b5',
            strokeOpacity: 0.8,
            strokeWeight: 3
        });

        pathFromOlawa.setMap(map);
    })
    
})

