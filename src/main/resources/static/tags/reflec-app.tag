<reflec-app>

    <style scoped>
        #my-map {
            display: block;
            width: 100%;
            height: 800px;
        }
        footer {
            display: block;
            bottom: 0;
        }
    </style>

    <reflec-header></reflec-header>

    <div id='my-map'></div>

    <menu-sidebar></menu-sidebar>
    <info-sidebar></info-sidebar>
    <mark-modal></mark-modal>

    this.on('mount', () => {

        // create map
        const map = new GMaps({ div: "#my-map", lat: 0, lng: 0, zoom: 17 })

        // current location acquisition
        GMaps.geolocate({
            success: position => {
                let [lat, lng] = [position.coords.latitude, position.coords.longitude]

                // To the current location in the center of the map
                map.setCenter(lat, lng)
            },
            error: error => { console.log('Geolocation failed: ' + error.message); },
            not_supported: () => { console.log("Your browser does not support geolocation"); },
            always: () => { console.log("geolocate Done!"); }
        })

        //
        // Events
        //
        const $markModal = $('.mark.small.modal')

        // Event of GMaps Map Clicked
        GMaps.on('click', map, position => {
            console.log('click map!!')
            $markModal.modal('show')
        })

        // Event of GMaps marker added
        GMaps.on('marker_added', map, marker => {
            console.log('add marker!')

            // Event of marker clicked
            marker.addListener('click', () => {
                console.log('click marker!!')
            })
        })
    })

</reflec-app>