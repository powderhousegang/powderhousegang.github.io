//View/Hide Thumbnail JavaScript
$(document).ready(function() { 
  $(".panel").hide();
  $("#featured-main-slider").hover( 
    function(){ 
			$(".panel").stop(true, true).slideDown('medium'); 
		},
    function(){ 
			$(".panel").slideUp('medium'); 
		}
  );
});
