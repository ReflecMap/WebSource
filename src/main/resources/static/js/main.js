(function($){
    'use struct';

    var map = new MyMap();
    var markerData = new MarkerData();
    var modal = {};

    GMaps.on('click', map.mymap.map, function(e) {
        markerData.pushMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        $('#inputModal').modal('show');
    });
    $('#modal-mark-btn').on('click', function() {
        var formData = $('#modal-form').serializeArray();
        markerData.pushInputData(formData);
        $('#inputModal').modal('hide');
        console.log(markerData.getJSONData());
    });
    $('#modal-cancel-btn').on('click', function() {
        $('#inputModal').modal('hide');
    });
})(jQuery);

