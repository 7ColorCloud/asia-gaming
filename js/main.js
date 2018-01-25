$(function(){	
	/* slide menu start */
	$('body').attr('rel',$(window).width());
	set_mobile_menu();
	
	$( '.desktop-lang' ).click(function() {
	  article_translate('.readmore');
	});
	
	$( '.mobile-lang' ).click(function() {
	  $( '.mobile-menu-btn' ).click();
	  $('.readmore').trigger('article_translate');
	});
	
	$(".collapse_expand").hide();
    $(".collapse_link").click(function(e){
        e.preventDefault();
        $(".collapse_expand", $(this).parent()).slideToggle();
		$(".arrowdn", $(this).parent()).toggleClass( "arrowup" );        
    });
	
	$(".more").hide();
	$(".preview").show();
    $(".readmore").click(function(e){
        e.preventDefault();
        $(".more", $(this).parent()).slideToggle();
        $(".preview", $(this).parent()).slideToggle();
		article_translate($(this));
    });
	
	var hoverOrClick = function(){	
		if ($('.eglobal').hasClass('active')){
			$(this).removeClass('active');
			$('#language-desktop').css( 'display', 'none');
		} else {
			$(this).addClass('active');
			$('#language-desktop').css( 'display', 'block');
		}
	};
	
	$(".eglobal").click(hoverOrClick).mouseover(hoverOrClick);
	$('#language-desktop').click(hoverOrClick).mouseleave(hoverOrClick);
	
	$('.mobile-menu-btn').click(function(){	
		if ($('.slide-menu').hasClass('active')){
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).removeClass('active');
			$('.slide-menu').stop(true,false).slideUp(300).removeClass('active');
			$('body').css('position','');
			$('#wrap').css('margin-top', '');
			$(window).scrollTop($('#wrap').attr('rel'));
			$('#mobile-plane').stop(true,false).fadeOut(200);
		} else {
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).addClass('active');
			$('.slide-menu').stop(true,false).slideDown(300).addClass('active');
			$('#wrap').attr('rel', $(window).scrollTop());
			$('#wrap').css('margin-top', -$(window).scrollTop());
			$('body').css('position','fixed');
			$('#mobile-plane').stop(true,false).fadeIn(200);
		}
	});
	
	$( '.slide-menu>li>.header' ).click(function() {
	  $( '.slide-menu>li>span' ).click();
	});
	$('.slide-menu>li>span').click(function(){
		if($(this).next('ul').hasClass('active')){
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).removeClass('active').next('ul').stop(true,false).slideUp(200).removeClass('active');
		} else {
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).addClass('active').next('ul').stop(true,false).slideDown(300).addClass('active');
		}
	});	
	
	$('#mobile-plane').click(function(){
		reset_mobile_menu();
	});
	/* slide menu end */
	
	/* desktop menu start */
	$('#menu>ul>li').hover(function(){
		if($(this).children('ul').length){
			$(this).children('ul').stop(true,false).fadeIn(300);
			$('#menu-bg').stop(true,false).fadeIn(300);
		}
	}, function(){
		$(this).children('ul').stop(true,false).fadeOut(300);
		$('#menu-bg').stop(true,false).fadeOut(300);
	});
	/* desktop menu end */
	
	/* home slideshow */
	//$('.homeSlideShow').cycle();
	
	banner_animation();
	
	setTimeout(function(){
		$('body').animate({'opacity':1},600);
	},500);
});

$(window).load(function(){
	lang.loadPack('tw');
	//tracking();
});

$(window).resize(function(){
	set_mobile_menu();
	banner_animation();
	if ($(window).width() != $('body').attr('rel')){
		reset_mobile_menu();
		$('body').attr('rel',$(window).width());
	}
});

$(window).scroll( function(){
	//header();
});

/* slide menu */
function set_mobile_menu(){
	$('.wrapper-slide-menu').css('max-height', $(window).height() - 52);
}

function reset_mobile_menu(){
	if ($('.slide-menu').hasClass('active')){
		$('.mobile-menu-btn').trigger('click');
	}
}

function clear_slide_submenu(){
	$(this).next('ul').stop(true,false).slideUp(300).removeClass('active');
}

function clear_slide_arrow(){
	$('.slide-menu>li>span').each(function(){
		$(this).next('ul').stop(true,false).slideUp(300).removeClass('active');
	});			
}

function header(){
	if ($(window).width()>980){
		if ($(window).scrollTop() > 200){
			$('#header').stop(false,false).animate({height:'80px'},200);	
			$('#company-logo').stop(false,false).animate({paddingTop :'6px', width:'54px'},200);	
		} else {
			$('#header').stop(false,false).animate({height:'150px'},200);
			$('#company-logo').stop(false,false).animate({paddingTop :'20px', width:'110px'},200);	
		}
	} else {
		$('#header').css('height','');
		$('#company-logo').css('padding-top','').css('width','');
	}	
}

function logo(){
	if ($(window).width() > 980){
		$('#company-logo').children('a').children('img').attr('src','/catalog/view/theme/default/img/logo.png');	
		$('#company-logo').mouseenter(function(){
			$(this).children('a').children('img').attr('src','/catalog/view/theme/default/img/logo-h.png');	
		});
		$('#company-logo').mouseleave(function(){
			$(this).children('a').children('img').attr('src','/catalog/view/theme/default/img/logo.png');
		});
	} else {
		$('#company-logo').children('a').children('img').attr('src','/catalog/view/theme/default/img/logo-h.png');
		$('#company-logo').mouseenter(function(){
			$(this).children('a').children('img').attr('src','/catalog/view/theme/default/img/logo-h.png');	
		});
		$('#company-logo').mouseleave(function(){
			$(this).children('a').children('img').attr('src','/catalog/view/theme/default/img/logo-h.png');
		});	
	}	
}

function banner_animation(){
	if ($(window).width() > 980){
		$('.item .text').addClass('animated');
	} else {
		$('.item .text').removeClass('animated');
	}
}


function article_translate(ttt){
	 ttt.text(function(i, text){
	  return text === window.lang.translate('Original Article') ? window.lang.translate('Back to Summary') : window.lang.translate('Original Article');
	 });	
}

/*
$(document).ready(function () {
    $(".more").hide();
    $(".readmore").on("click", function () {
        var txt = $(".more").is(':visible') ? 'Original Article' : 'Back to Summary';
        $(".readmore").text(txt);
        $(this).next('.more').slideToggle(200);
    });
});
*/