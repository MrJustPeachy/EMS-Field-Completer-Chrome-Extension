var selectFields = $('div#reservation-udf-container').children().children('select');
var yesFields = selectFields.splice(1, 1);

$.each(selectFields, function(index, element) { $(element).prop('selectedIndex', 1).css('border-color', 'rgb(204, 204, 204)'); });
$.each(yesFields, function(index, element) { $(element).prop('selectedIndex', 2).css('border-color', 'rgb(204, 204, 204)'); });

$('input.billingReference-input').val('1111').css('border-color', 'rgb(204, 204, 204)');