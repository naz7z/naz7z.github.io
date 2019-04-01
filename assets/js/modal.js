var mdwBtn = $('.switchModal'),
overlayOpacity = 0.7,
fadeTime = 500;

var mdoBtn = $('.openWindows'),
overlayOpacity = 0.7,
fadeTime = 500;


$(function(){
	mdwBtn.on('click',function(e){
		e.preventDefault();

		openModal($(this).attr('href'));
	});

	mdoBtn.on('click',function(e){
		e.preventDefault();

		openWindow($(this).attr('href'));
	});
});

function openModal(href) {
	setHref = href,
	wdHeight = $(window).height();
	$('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">✖</div><iframe id="contWrap"></iframe></div>');

	$('#contWrap').attr('src', setHref);
	$('body').css('overflow', 'hidden');
	// modalResize();
	$('#mdOverlay, #mdWindow').css({display:'block',opacity:'0'});
	$('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
	$('#mdWindow').stop().animate({opacity:'1'},fadeTime);
	$('body').addClass('showing_modal');

	$(window).on('resize',function(){
		var adjHeight = $(window).height();
		$('#mdOverlay').css({height:adjHeight});
	});

	$('#mdOverlay,.mdClose').on('click',function(){
		$('body').removeClass('showing_modal');

		$('body').css('overflow', 'auto');
		$('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
			$('#mdOverlay,#mdWindow').remove();
		});
	});
}

function openWindow(href) {
	console.log($(window).width());
	if ($(window).width() <= 768) {
		window.open(href, '_blank');
		return;
	}
	setHref = href,
	wdHeight = $(window).height();
	$('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">✖</div><iframe id="contWrap"></iframe></div>');

	$('#contWrap').attr('src', setHref);
	$('body').css('overflow', 'hidden');
	// modalResize();
	$('#mdOverlay, #mdWindow').css({display:'block',opacity:'0'});
	$('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
	$('#mdWindow').stop().animate({opacity:'1'},fadeTime);
	$('body').addClass('showing_modal');

	$(window).on('resize',function(){
		var adjHeight = $(window).height();
		$('#mdOverlay').css({height:adjHeight});
	});

	$('#mdOverlay,.mdClose').on('click',function(){
		$('body').removeClass('showing_modal');

		$('body').css('overflow', 'auto');
		$('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
			$('#mdOverlay,#mdWindow').remove();
		});
	});
}
