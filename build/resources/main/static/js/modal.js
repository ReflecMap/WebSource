(function($){
    'use struct'

    $('#modal-mark-btn').on('click', function() {
        var form = $('#modal-form');
        var markerData = {};
        $(form.serializeArray()).each(function(i, v) {
            markerData[v.name] = v.value;
        });

        $('#inputModal').modal('hide');
    });
    $('#modal-cancel-btn').on('click', function() {
        $('#inputModal').modal('hide');
    });
})(jQuery);