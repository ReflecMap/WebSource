class InputMarkerModal {
    constructor() {

    }

    initModalValues() {
        $('#marker-modal-form [name=title]').val("");
        $('#marker-modal-form [name=rate]').val("2");
        $('#marker-modal-form [name=subscribe]').val("");
        $('#marker-modal-form [name=private]').prop("checked", false);
    }
}