'use struct';

function rating() {
    $('.kv-ltr-theme-fa-star').rating({
        hoverOnClear: false,
        theme: 'krajee-fa',
        filledStar: '<i class="fa fa-star"></i>',
        emptyStar: '<i class="fa fa-star-o"></i>'
    });
}