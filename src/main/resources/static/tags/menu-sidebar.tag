<menu-sidebar>

    <div class='ui left reflec-menu vertical inverted sidebar labeled icon menu'>
        <a class='item'>
            <i class='home icon'></i>
            Home
        </a>
        <a class='item'>
            <i class='map icon'></i>
            MyPage
        </a>
        <a class='item' onclick={ showMarkers }>
            <i class='marker icon'></i>
            Markers
        </a>
        <a class='item'>
            <i class='smile icon'></i>
            Friends
        </a>
        <a class='item'>
            <i class='configure icon'></i>
            Config
        </a>
    </div>

    <markers-modal></markers-modal>

    this.on('mount', () => {
    })

    showMarkers() {
        const $markersModal = $('.markers.small.modal')
        const $menu = $('.reflec-menu')

        $markersModal.modal('show')
        $menu.sidebar('toggle')
    }


</menu-sidebar>