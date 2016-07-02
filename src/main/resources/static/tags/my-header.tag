<my-header>

    <style scoped>
        :scope {
            display: block;
        }
        .content.icon:hover {
            cursor: pointer;
        }
        div {
            background: #0ea432;
        }
    </style>

    <div class='ui block header'>
        <i onclick={ showSidebar } class='content icon'></i>
        ReflecMap(Logo)
    </div>

    showSidebar() {
        $('.ui.sidebar').sidebar('toggle')
    }

</my-header>