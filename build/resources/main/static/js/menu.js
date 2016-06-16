(function(){
	'use struct'

	$('#menuOne, #menuTwo, #menuThree').on('show.bs.collapse', function() {
		$('a[href="#' + this.id + '"]').find('span.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	})
	.on('hide.bs.collapse', function() {
		$('a[href="#' + this.id + '"]').find('span.glyphicon-chevron-up').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	});
	$('a[href="#menuOne"], a[href="#menuTwo"], a[href="#menuThree"]').on('click', function(event) {
		event.preventDefault();
	});
})();