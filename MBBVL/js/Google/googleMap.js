initialize();
function initialize() {
    var lat = '43.658276'; //Set your latitude.
    var lon = '-79.385252'; //Set your longitude.

    var centerLon = lon - 0.0105;

    var myOptions = {
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true,
        center: new google.maps.LatLng(lat, centerLon),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Bind map to elemet with id map-canvas
    var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lon),
    });

    var contentString = '<div class="marker-info-win">' +
            '<div class="marker-inner-win"><span class="info-content">' +
            '<h1 class="marker-heading">ACGT</h1>' +
            'Suite 1100 <br>' +
             '700 Bay Street<br>' +
              'Toronto, ON M5G 1Z6, Canada' +
              '' +
            '</span>' +
            '</div></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    google.maps.event.addListener(marker, 'click', function () {

        infowindow.open(map, marker);
    });

    infowindow.open(map, marker);


}