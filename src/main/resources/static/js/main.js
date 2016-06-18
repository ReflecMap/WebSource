(function($){
    
    var map = new MyMap();
    var markerData = new MarkerData();
    var modal = {};

    //
    // Click Events
    //
    // GMaps Click Events
    GMaps.on('click', map.mymap.map, function(e) {
        markerData.pushMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        $('#inputModal').modal('show');
    });

    // Modal Click Events
    $('#modal-mark-btn').on('click', function() {
        var formData = $('#modal-form').serializeArray();
        markerData.pushInputData(formData);
        $('#inputModal').modal('hide');
        map.addMyMarker({
           lat: markerData.obj.lat,
           lng: markerData.obj.lng
        });
        console.log(markerData.getJSONData());
    });
    $('#modal-cancel-btn').on('click', function() {
        $('#inputModal').modal('hide');
    });
})(jQuery);

