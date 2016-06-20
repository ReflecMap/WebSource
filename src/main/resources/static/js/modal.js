class InputMarkerModal {
    constructor() {

    }

    initModalValues() {
        $('#marker-modal-form [name=title]').val("");
        $('#marker-modal-form [name=rate]').val("3");
        $('#marker-modal-form [name=subscribe]').val("");
        $('#marker-modal-form [name=private]').prop("checked", false);
    }

    pushModalValues(markerData) {
        $('#marker-modal-form [name=title]').val(markerData.title);
        $('#marker-modal-form [name=rate]').val(markerData.rate);
        $('#marker-modal-form [name=subscribe]').val(markerData.subscribe);
        $('#marker-modal-form [name=private]').prop("checked", markerData.privateCheck);
    }
}