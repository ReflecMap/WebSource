//
// This practice is called a server API
//
(function($){
    const markerData = {
        lat: 1.23,
        lng: 4.56,
        title: 'title',
        rate: 4.8,
        subscribe: 'Text Text Text',
        privateCheck: 'true'
    };

    const $insertButton = $('#insert');
    const $showButton = $('#show');
    const $deleteButton = $('#delete');

    // Event of click insert button
    $insertButton.on('click', () => {
        console.log('click insert button');

        axios.post('/marker/insert', markerData)
            .then(() => console.log('successfully insert!'))
            .catch(error => console.log(error));
    });

    // Event of click show button
    $showButton.on('click', () => {
        console.log('click show button');

        axios.post('/marker/selectAll')
            .then(res => {
                const markers = res.data.markers;

                if (markers.length === 0) {
                    console.log('empty Data');
                    return;
                }

                markers.forEach(marker => console.log(marker));
            })
            .catch(error => console.log(error));
    });

    // Event of click insert button
    $deleteButton.on('click', () => {
        console.log('click delete button');

        axios.delete('/marker/deleteAll')
            .then(() => console.log('successfully delete all'))
            .catch(error => console.log(error));
    });

})(jQuery);