(function($){
  $(function(){
	  
    var scroll = $(document).scrollTop();
    var headerHeight = $('.page-header').outerHeight();
    
    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
      if (scrolled > headerHeight){
        /*$('.page-header').addClass('off-canvas');
		$('#wrapper-header').removeClass('wrapper-down');
		$('#wrapper-header').addClass('wrapper-up');
		$('#wrapper-postheader').addClass('wrapper-up');
		$('#language-desktop').css("display","none");*/
		$('.hot').addClass('wrapper-up');
      } else {
        /*$('.page-header').removeClass('off-canvas');
		$('#wrapper-header').addClass('wrapper-down');
		$('#wrapper-header').removeClass('wrapper-up');
		$('#wrapper-postheader').removeClass('wrapper-up');
		$('#language-desktop').css("display","");*/
		$('.hot').removeClass('wrapper-up');
      }
	  
	  //elite banner display and hide in different situations:
	  
	  
	  //resize
	  var h = $(window).height(), w = $(window).width();
		$(window).resize(function(){
		
			var nh = $(window).height(), nw = $(window).width();
			 // compare the corresponding variables.
			h = nh; w = nw; // update h and w;
			
			 if ((w > 980) && (scrolled > 700)){
				$('.elite').css("display","block");
			  } else {
				$('.elite').css("display","none");
			  }
		}); 
		
	  //scroll	
	  if ((w > 980) && (scrolled > 700)){
		$('.elite').css("display","block");
	  } else {
		$('.elite').css("display","none");
	  }
	  
	  //bottom	
	  if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
        	$('.elite').css("display","none");
   	  }
	  
      if (scrolled > scroll){
        $('.page-header').removeClass('fixed');
        } else {
		   /* scroll-up show
			$('.page-header').addClass('fixed');
			$('#wrapper-header').removeClass('wrapper-up');
       	   */
		}             
      scroll = $(document).scrollTop();  
     });
	 
	 
       
   });
})(jQuery); 