/**
 * 
 * @Damon   398846606@qq.com
 * @date    2013-08-29 16:49:46
 * @陈子峰_ 新浪微博
 * @github  http://github.com/fengzifz
 * http://www.8stream.com/scripts/styleSelect/
 */

/**
 * 
 */

(function($){
	function SelectUI(elements, opts){
		var el = elements,
			$el = $(el),
			me = this,
			options = $.extend({
				showTop: true,
				showBottom: true,
				height: 20
			}, opts);

		function getSelectData(){
			var el = [];
			$el.each(function(i){
				var _el = [];
				$(this).find('option').each(function(j){
					_el.push($(this).text());
				});
				el[i] = _el;
			});
			return el;
		}

		function createCapHTML(){
			var HTML = {top: '', bottom: ''};
			options.showTop ? HTML.top = '<div class="sTop"></div>' : false;
			options.showBottom ? HTML.bottom = '<div class="sBottom"></div>' : false;
			return HTML;
		}

		function createSelectedHTML(){
			var HTML = [], data = getSelectData();
			for(var i = 0; i < data.length; i++){
				HTML[i] = '<div class="selected">' + data[i][0] + '</div>'
			}
			return HTML;
		}

		function createMainHTML(){
			var dataHTML = [], dataHTMLInner, 
				HTML = createCapHTML(), 
				data = getSelectData(); 
			for(var i = 0; i < data.length; i++){
				dataHTMLInner = '';
				for(var j = 0; j < data[i].length; j++){
					dataHTMLInner += '<li class="opt-' + data[i][j] + '">' + data[i][j] + '</li>';
				}
				dataHTML[i] = '<div class="selectUI" style="position:relative;"><div class="data-wrapper">' + HTML.top + '<div class="sMiddle"><ul class="select-' + i + '">' + dataHTMLInner + '</ul></div>' + HTML.bottom + '</div></div>';
			}
			return dataHTML;
		}

		function setHTML(){
			var dataHTML = createMainHTML();
			$el.each(function(i){
				$(dataHTML[i]).appendTo($(this).parent());
			});
		}

		function setSelectedHTML(){
			var HTML = createSelectedHTML();
			setHTML();
			$el.each(function(i){
				$(HTML[i]).appendTo($(this).parent().find('.selectUI'));
			});
		}

		function init(){
			setSelectedHTML();
			$el.css('display','none');

			$('.data-wrapper').css({
				'display' : 'none',
				'position': 'absolute',
				'left'    : '0px',
				'top'     : '0px'
			});

			$('.selected').css({
				'height'  : options.height,
				'cursor'  : 'pointer'
			});
		}

		function isShowDropdown(){
			init();
			$('.selected').each(function(){
				$(this).click(function(){
					if(!$(this).hasClass('active')){
						$(this).addClass('active').parent().find('.data-wrapper').css({
							'display' : 'block',
							'top'     : $(this).height(),
							'left'    : '0px'
						});
					} else {
						$(this).removeClass('active').parent().find('.data-wrapper').css({
							'display' : 'none'
						});
					}
				});
			});
		}

		function isHoverDropdown(){
			var isHover = false;
			$('.data-wrapper').hover(function(){
				isHover = true;
			}, function(){
				isHover = false;
			});
			return isHover;
		}

		function documentClick(){
			var isDataHover = isHoverDropdown();
			$(document).click(function(){
				if(!isDataHover && $('.selected').hasClass('active')){
					$('.data-wrapper').css('display','none');
				}
			});
		}

		function selectData(){

		}

		function passValue(){

		}

		isShowDropdown();
		isHoverDropdown();
		documentClick();

	}

	$.fn.selectUI = function(options){
		return new SelectUI(this, options);
	}

	
})(jQuery);