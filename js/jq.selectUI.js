/**
 * 
 * @Damon   398846606@qq.com
 * @date    2013-08-29 16:49:46
 * @陈子峰_ 新浪微博
 * @github  http://github.com/fengzifz
 * http://www.8stream.com/scripts/styleSelect/
 * http://www.cnblogs.com/QQJnet/archive/2011/12/11/2284174.html
 */

/**
 * Release History
 * 0.1.0
 */

(function($){
	function SelectUI(elements, opts){
		var el = elements,
			$el = $(el),
			selectUiClass = 'selectUI',
			selectedClass = 'selected',
			dataClass = 'data-wrapper',
			options = $.extend({
				showTop: true, //Top 和 Bottom 是两个div层，用于调整下拉选项的样式
				showBottom: true,
				height: 20, // <div class="selected"> 的高度
				clickOtherToHide: true //点击下拉选项以外的地方时，隐藏下拉选项
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
				HTML[i] = '<div class="' + selectedClass + '">' + data[i][0] + '</div>'
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
					dataHTMLInner += '<li class="opt-' + data[i][j] + '"><span>' + data[i][j] + '</span></li>';
				}
				dataHTML[i] = '<div class="' + selectUiClass + '" style="position:relative;"><div class="' + dataClass + '">' + HTML.top + '<div class="sMiddle"><ul class="select-' + i + '">' + dataHTMLInner + '</ul></div>' + HTML.bottom + '</div></div>';
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
				$(HTML[i]).appendTo($(this).siblings('.' + selectUiClass));
			});
		}

		// init
		(function(){
			setSelectedHTML();
			$el.css('display','none');

			$('.' + dataClass).css({
				display  : 'none',
				position : 'absolute',
				left     : '0px',
				top      : '0px'
			});

			$('.' + selectedClass).css({
				height   : options.height,
				cursor   : 'pointer'
			});
		})();

		$('.' + selectedClass).each(function(){
			$(this).click(function(){
				if(!$(this).hasClass('active')){
					$(this).addClass('active').siblings('.' + dataClass).css({
						display : 'block',
						top     : $(this).height(),
						left    : '0px'
					});
				} else {
					$(this).removeClass('active').siblings('.' + dataClass).css({
						display : 'none'
					});
				}
			});
		});

		// 点击下拉选项外的位置时，隐藏下拉选项
		function hideSelection(){
			var isHover;
			$('.' + dataClass + ', .' + selectedClass).hover(function(){
				isHover = true;
			}, function(){
				isHover = false;
			});
			$(document).click(function(){
				if(!isHover){
					$('.' + dataClass).css('display','none');
					$('.' + selectedClass).removeClass('active');
				}
			});
		}

		// 选择选项，替换隐藏的select的选项
		$('.' + dataClass).each(function(i){
			var selectIndex = i;
			$(this).find('li').click(function(){
				var liIndex = $(this).index();
				var data = $(this).find('span').text();
				$(this).closest('.' + dataClass).css('display','none').siblings('.' + selectedClass).removeClass('active').text(data);
				$(this).closest('.' + selectUiClass).siblings('select').get(0).selectedIndex = liIndex;
			});
		});

		if(options.clickOtherToHide){
			hideSelection();
		}
	}

	$.fn.selectUI = function(options){
		return new SelectUI(this, options);
	}

})(jQuery);
