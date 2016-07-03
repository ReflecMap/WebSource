<mark-modal>

    <div class='ui mark small modal'>
        <div class='header'>
            Mark
        </div>
        <div class='content'>
            <form id='form' class='ui form' onsubmit={ addMarker }>
                <div class='field'>
                    <label>Title</label>
                    <input type='text' placeholder='title' value={ title }>
                </div>
                <div class='field'>
                    <label>Favorite</label>
                    <div name='rate' class='ui star rating' data-rating={ rate } data-max-rating='5' value={ rate }></div>
                </div>
                <div class='field'>
                    <label>Subscribe</label>
                    <textarea name='subscribe' rows='4' placeholder='Subscribe' value={ subscribe }></textarea>
                </div>
                <div class='field'>
                    <div class='ui checkbox'>
                        <input type='checkbox' name='private' value={ privateCheck }>
                        <label>Private</label>
                    </div>
                </div>
            </form>
        </div>
        <div class='actions'>
            <div onclick={ cancel } class="ui black deny button">
                Cancel
            </div>
            <div onclick={ addMarker } class="ui positive deny button">
                Mark
            </div>
        </div>
    </div>

    this.on('mount', () => {
        $('.rating').rating()
    })

    cancel(e) {
        console.log('click cancel')
    }

    addMarker(e) {
        console.log('click mark')
    }

</mark-modal>