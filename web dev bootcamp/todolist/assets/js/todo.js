$("ul").on("click", "li", function(){

$(this).toggleClass("completed");

});

$("ul").on("click", "span", function(event){

event.stopPropagation();
$(this).parent().fadeOut( function() { $(this).remove() } );

});

$("input[type='text']").keypress(function(event){

if( event.which === 13 )
{
	var text = $(this).val();
	$(this).val("");
	$("ul").append("<li><span> <i class='fas fa-trash'></i> </span> "+text+"</li>");
}

});

$(".fa-plus").click(function(){

$("input[type='text']").fadeToggle();

});