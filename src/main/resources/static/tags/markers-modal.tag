<markers-modal>

    <div class='ui markers small modal'>
        <div class='header'>Markers</div>
        <div class='content'>
            <div class='ui category search'>
                <div class='ui icon input'>
                    <input class='prompt' type='text' placeholder='Search markers...' value={ search }>
                    <i class='search icon'></i>
                </div>
                <div class='results'></div>
            </div>

            <div class='ui relaxed divided list'>
                <div class='item' each={ putFlg ? markers : [] }>
                    <i class='marker icon'></i>
                    <div class='content'>
                        <a class='header'>{ title }</a>
                        <div class='description'>rate or subsc or hide</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    // sample markers
    this.markers = [
        { title: 'Andorra' },
        { title: 'United Arab Emirates' },
        { title: 'Afghanistan' },
        { title: 'Antigua' },
        { title: 'Anguilla' },
        { title: 'Albania' },
        { title: 'Armenia' },
        { title: 'Netherlands Antilles' },
        { title: 'Angola' },
        { title: 'Argentina' },
        { title: 'American Samoa' },
        { title: 'Austria' },
        { title: 'Australia' },
        { title: 'Aruba' },
        { title: 'Aland Islands' },
        { title: 'Azerbaijan' },
        { title: 'Bosnia' },
        { title: 'Barbados' },
        { title: 'Bangladesh' },
        { title: 'Belgium' },
        { title: 'Burkina Faso' },
        { title: 'Bulgaria' },
        { title: 'Bahrain' },
        { title: 'Burundi' }
        // etc
    ]

    this.on('mount', () => {
        this.putFlg = true

        $('.ui.search').search({ source: this.markers })
    })

    this.on('update', () => {
        this.putFlg = (this.search == null) ? true : false
    })

</markers-modal>