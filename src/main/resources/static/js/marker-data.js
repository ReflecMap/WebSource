var MarkerData = function() {
    this.obj = {};
};
MarkerData.prototype.pushMarkerPosition = function(position) {
    if(position.lat !== undefined) {
        this.obj.lat = position.lat;
    }
    if(position.lng !== undefined) {
        this.obj.lng = position.lng;
    }
};
MarkerData.prototype.pushInputData = function(formData) {
    this.obj.title = formData[0].value;
    this.obj.rate = formData[1].value;
    this.obj.subscribe = formData[2].value;
    this.obj.private = formData[3].value;
};
MarkerData.prototype.getJSONData = function() {
    return JSON.stringify(this.obj);
};

