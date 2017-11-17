/*
 * jQuery | Prosto Slider 
 * http://kylaksizov.ru/
 * Copyright 09.12.2015, KYLAKSIZOV
*/

$(function(){

	/* SLIDER */

	function SliderAutoHeight(){
		$(".slider img").each(function(){
			var slideImg = $(this).height();
			$(this).parents(".slider").css("height", slideImg + "px");
		})
	}

	 // если в слайдере вставлено видео
	function IframeAutoHeight(){
		$(".slider iframe").each(function(){
			var slideIframe = $(this).height();
			$(this).parents(".slider").css("height", slideIframe + "px");
		})
	}

	setTimeout(function(){ // без этого сразу не работает, ждём одну не знаметную секунду
        SliderAutoHeight();
        IframeAutoHeight(); // если в слайдере вставлено видео
    }, 300);

	// При изменении рзмера экрана назнаяаем новую высоту слайдеру зависимую от высоты картинок
	$(window).resize(function(){
		SliderAutoHeight();
		IframeAutoHeight(); // если в слайдере вставлено видео
	})

	// Кнопка вперёд
	$("body").on("click", ".next", function(){
		var active = $(this).prev().prev().children(".active");
		if(active.next("li").length){ // если ещё есть li
			active.next().stop(true, true).addClass("active").fadeIn(1000).prev().removeClass("active");
		} else{
			$(this).prev().prev().children("li:first").stop(true, true).addClass("active").fadeIn(1000);
			$(this).prev().prev().children("li:last").stop(true, true).removeClass("active");
		}
		/*--- Название и описание после слайдера если нужно ---*/
		var active_k = $(this).parent().next().children(".active_k");
		if(active_k.next("li").length){
			active_k.next().stop(true, true).addClass("active_k").fadeIn(1000).prev().removeClass("active_k");
		} else{
			$(this).parent().next().children("li:first").stop(true, true).addClass("active_k").fadeIn(1000);
			$(this).parent().next().children("li:last").stop(true, true).removeClass("active_k");
		}
		/*--- Название и описание после слайдера если нужно END---*/
		return false;
	})

	// Кнопка назад
	$("body").on("click", ".prev", function(){
		var active = $(this).prev().children(".active");
		if(active.prev("li").length){ // если ещё есть li
			active.prev().stop(true, true).addClass("active").fadeIn(1000).next().removeClass("active");
		} else{
			$(this).prev().children("li:last").stop(true, true).addClass("active").fadeIn(1000);
			$(this).prev().children("li:first").stop(true, true).removeClass("active");
		}
		/*--- Название и описание после слайдера если нужно ---*/
		var active_k = $(this).parent().next().children(".active_k");
		if(active_k.prev("li").length){
			active_k.prev().stop(true, true).addClass("active_k").fadeIn(1000).next().removeClass("active_k");
		} else{
			$(this).parent().next().children("li:last").stop(true, true).addClass("active_k").fadeIn(1000);
			$(this).parent().next().children("li:first").stop(true, true).removeClass("active_k");
		}
		/*--- Название и описание после слайдера если нужно END---*/
		return false;
	})

	/* SLIDER */

})