var selectFields = $('div#reservation-udf-container').children().children('select');
var yesFields = selectFields.splice(1, 1);

$.each(selectFields, function(index, element) { $(element).prop('selectedIndex', 1); });
$.each(yesFields, function(index, element) { $(element).prop('selectedIndex', 2); });

$('input.billingReference-input').val('1111');

// https://schedule.ucdenver.edu/EmsWebApp/RoomRequest.aspx?start=2019-06-3%2009:00:00&end=2019-06-3%2010:00:00&roomid=1484&ProcessTemplateId=95&timezoneid=68