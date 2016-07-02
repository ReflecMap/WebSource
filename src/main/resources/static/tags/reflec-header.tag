<reflec-header>

    <style scoped>
        :scope {
            display: block;
        }
        a:hover {
            cursor: pointer;
        }
        .ui.block.header {
            background: #66DA81;
        }
        .right {
            float: right;
        }
    </style>

    <div class='ui header block'>
        <a><i onclick={ showMenu } class='content icon'></i></a>
        ReflecMap(Logo)
        <a class='right'><i onclick={ showInfo } class="alarm icon"></i></a>
    </div>

    showMenu() {
        const $menu = $('.reflec-menu')
        $menu.sidebar('toggle')
    }

    showInfo() {
        const $info = $('.reflec-info')
        $info.sidebar('setting', 'transition', 'overlay').sidebar('toggle')
    }

</reflec-header>