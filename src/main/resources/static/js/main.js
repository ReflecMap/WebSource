(function($){
    'use strut';

    //
    // initialize
    //
    var map = new MyMap();
    var markerData = new MarkerData();
    var modal = new InputMarkerModal();

    // current location acquisition
    GMaps.geolocate({
        success: function (position) {
            let [lat, lng] = [position.coords.latitude, position.coords.longitude];

            // To the current location in the center of the map
            map.mymap.setCenter(lat, lng);
        },
        error: function (error) {
            console.log('Geolocation failed: ' + error.message);
        },
        not_supported: function () {
            console.log("Your browser does not support geolocation");
        },
        always: function () {
            console.log("geolocate Done!");
        }
    });

    //
    // Events
    //
    // Event of GMaps Map Clicked
    GMaps.on('click', map.mymap.map, position => {
        markerData.saveMarkerPosition({
            lat: position.latLng.lat(),
            lng: position.latLng.lng()
        });
        $('#marker-modal').modal('show');
    });
    // Event of GMaps marker added
    GMaps.on('marker_added', map.mymap, marker => {
        console.log('marker add!!');
    });

    // Event of click the mark-btn of the marker modal
    $('#modal-mark-btn').on('click', () => {
        console.log('click mark-btn!!');

        // formData
        // title: String
        // rate: String
        // subscribe: String
        // private: String
        let title = $('#marker-modal-form [name=title]').val();
        let rate = $('#marker-modal-form [name=rate]').val();
        let subscribe = $('#marker-modal-form [name=subscribe]').val();
        let privateCheck = ($('#marker-modal-form [name=private]').prop('checked')) ? "true" : "false";
        console.log(`title:${title}, rate:${rate}, subscribe:${subscribe}, privateCheck:${privateCheck}`);

        markerData.saveMarkerInfomation({
            title: title,
            rate: rate,
            subscribe: subscribe,
            privateCheck: privateCheck
        });
        console.log(markerData.getJSONData());

        map.addMyMarker(markerData.obj);

        $('#marker-modal').modal('hide');

        // To initialize the value entered in the modal
        modal.initModalValues();
    });
    // Event of click the cancel-btn of the marker modal
    $('#modal-cancel-btn').on('click', () => {
        console.log('click cancel-btn!!');

        $('#marker-modal').modal('hide');
        modal.initModalValues();
    });
})(jQuery);

