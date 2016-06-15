var $states = $(".js-source-states");
var statesOptions = $states.html();
$states.remove();
$(".list-data").append(statesOptions);

var	$dataList = $('.marker-list');
$dataList.select2();