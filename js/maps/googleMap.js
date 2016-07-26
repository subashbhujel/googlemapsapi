 var map;
 var initialCenter;
 var initialZoom;

 function init() {
     map = new google.maps.Map(document.getElementById('googleMap'), {
         zoom: 3,
         center: {
             lat: 47.620499,
             lng: -122.350876
         },
         mapTypeId: google.maps.MapTypeId.TERRAIN
     });
 }

 function getUserLocations(id) {
     console.log("Getting a location data for user:" + id);

     return flightPlanCoordinates = [{
         lat: 47.620499,
         lng: -122.350876
     }, {
         lat: 47.597839,
         lng: -122.156489
     }, {
         lat: 47.675716,
         lng: -122.117219
     }];
 }

 function simpleMarker(id) {
     var currentLocation = getUserLocations(id)[0];

     var m = new google.maps.Map(document.getElementById('googleMap'), {
         zoom: 4,
         center: currentLocation,
         mapTypeId: google.maps.MapTypeId.TERRAIN
     });

     var marker = new google.maps.Marker({
         position: currentLocation,
         map: m,
         title: 'Hello World!'
     });
 }

 function addPolyline(id) {
     // TODO: Fetch location based on this id
     console.log("User locations requested for id:" + id);

     //  var input = document.getElementById('txtLocationId').value;
     //  var latlngStr = input.split(',', 2);
     //  var latlng = {
     //      lat: parseFloat(latlngStr[0]),
     //      lng: parseFloat(latlngStr[1])
     //  };
     //  geocoder.geocode({
     //      'location': latlng
     //  }, function(results, status) {
     //      if (status === google.maps.GeocoderStatus.OK) {
     //          if (results[1]) {
     //              mapp.setZoom(11);
     //              var marker = new google.maps.Marker({
     //                  position: latlng,
     //                  map: mapp
     //              });
     //              infowindow.setContent(results[1].formatted_address);
     //              infowindow.open(mapp, marker);
     //          } else {
     //              window.alert('No results found');
     //          }
     //      } else {
     //          window.alert('Geocoder failed due to: ' + status);
     //      }
     //  });

     var polyLine = getUserLocations();

     console.log("User data fetched.");

     var flightPath = new google.maps.Polyline({
         path: polyLine,
         geodesic: true,
         strokeColor: '#FF0000',
         strokeOpacity: 1.0,
         strokeWeight: 2
     });

     var newCenter = new google.maps.LatLng(polyLine[0].lat, polyLine[0].lng);
     //  map.setCenter(newCenter);
     map.setZoom(12);

     flightPath.setMap(map);
 }