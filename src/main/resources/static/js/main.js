(function($){
    'use strut';

    //
    // initialize
    //
    var map = new MyMap();
    var markerData = new MarkerData();
    var modal = new InputMarkerModal();
    var update = false;

    // current location acquisition
    GMaps.geolocate({
        success: position => {
            let [lat, lng] = [position.coords.latitude, position.coords.longitude];

            // To the current location in the center of the map
            map.mymap.setCenter(lat, lng);
        },
        error: error => { console.log('Geolocation failed: ' + error.message); },
        not_supported: () => { console.log("Your browser does not support geolocation"); },
        always: () => { console.log("geolocate Done!"); }
    });

    //
    // Events
    //
    // Event of GMaps Map Clicked
    GMaps.on('click', map.mymap.map, position => {
        console.log('click map!!');
        markerData.saveMarkerPosition({
            lat: position.latLng.lat(),
            lng: position.latLng.lng()
        });
        $('#marker-modal').modal('show');
        rating();
    });
    // Event of GMaps marker added
    GMaps.on('marker_added', map.mymap, marker => {
        console.log('marker add!!');

        // Event of marker clicked
        marker.addListener('click', () => {
            console.log('click marker!!');
            console.log(`id: ${marker.details.id}`);
            console.log(`title: ${marker.details.title}`)
            console.log(`position: ${marker.position.lat()}, ${marker.position.lng()}`);

            // update flg on
            update = true;

            // save id
            markerData.individualId = marker.details.id;

            modal.pushModalValues(marker.details);

            $('#marker-modal').modal('show');
            rating();
        });
    });

    // Add an event to all markers listed
    // map.mymap.markers.forEach(marker => {
    //     marker.addListener('click', () => {
    //         console.log('click marker!!');
    //         console.log(`id: ${marker.details.id}`);
    //         console.log(`position: ${marker.position.lat()}, ${marker.position.lng()}`);
    //
    //         modal.pushModalValues(marker.details);
    //
    //         $('#marker-modal').modal('show');
    //     });
    // );

    // Event of click the mark-btn of the marker modal
    $('#modal-mark-btn').on('click', () => {
        console.log('click mark-btn!!');

        let title = $('#marker-modal-form [name=title]').val();
        let rate = $('#marker-modal-form [name=rate]').val();
        let subscribe = $('#marker-modal-form [name=subscribe]').val();
        let privateCheck = ($('#marker-modal-form [name=private]').prop('checked')) ? "true" : "false";
        let id = (update) ? markerData.individualId : markerData.getMarkerStaticID();
        console.log(`id:${id}, title:${title}, rate:${rate}, subscribe:${subscribe}, privateCheck:${privateCheck}`);

        markerData.saveMarkerInfomation({
            id: id,
            title: title,
            rate: rate,
            subscribe: subscribe,
            privateCheck: privateCheck
        });
        console.log(markerData.getJSONData());

        if(update) {
            map.updateMyMarker(markerData);
            update = false;
            $('#marker-modal').modal('hide');
            return;
        }

        map.addMyMarker(markerData.obj);

        $('#marker-modal').modal('hide');

        // To initialize the value entered in the modal
        modal.initModalValues();
    });
    // Event of click the cancel-btn of the marker modal
    $('#modal-cancel-btn').on('click', () => {
        console.log('click cancel-btn!!');

        if(update) { update = false; }

        $('#marker-modal').modal('hide');
        modal.initModalValues();
    });
})(jQuery);

