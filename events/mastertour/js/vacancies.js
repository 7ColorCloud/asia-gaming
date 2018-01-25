/*
$(document).ready(function(){
  $(".vacancy__header").on("click", function() {
	  
	  	
		 if ($(this).parent(".vacancy").hasClass('vacancy--expanded')) {
			
			$(this).children(".vacancy__cross").addClass('spinback');
			$(this).parent(".vacancy").removeClass('vacancy--expanded');
		} else {
			$(this).children(".vacancy__cross").removeClass('spinback');
			$(this).parent(".vacancy").addClass('vacancy--expanded');
		}
		
  });
});
*/
$(document).ready(function(){
  $(".vacancy__header").on("click", function(event) {
    event.preventDefault();
    /*
  $(this).parent(".vacancy").toggleClass("vacancy--expanded");
  */ 
   if ($(this).parent(".vacancy").hasClass('vacancy--expanded')) {
   
   /*$(this).parent(".vacancy").height($(this).find('.bodge').height());*/
   $(this).children(".vacancy__cross").addClass('spinback');
   $(this).parent(".vacancy").removeClass('vacancy--expanded');
  } else {
   $(this).children(".vacancy__cross").removeClass('spinback');
   $(this).parent(".vacancy").addClass('vacancy--expanded');
  }
  
  });
});