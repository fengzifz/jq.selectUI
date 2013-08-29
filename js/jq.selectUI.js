/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2013-08-29 16:49:46
 * @version $Id$
 * http://www.8stream.com/scripts/styleSelect/
 */

(function($){
	function SelectUI(elements, opts){
		var el = elements,
			$el = $(el),
			me = this,
			options = $.extend({
				showTop: true,
				showBottom: true
			}, opts);

		function init(){

		}

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
				HTML[i] = '<span class="selected">' + data[i][0] + '</span>'
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
				dataHTML[i] = '<div class="selectUI">' + HTML.top + '<div class="sMiddle"><ul class="select-' + i + '">' + dataHTMLInner + '</ul></div>' + HTML.bottom + '</div>';
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
			
		}

		setHTML();
	}

	$.fn.selectUI = function(options){
		return new SelectUI(this, options);
	}

	
})(jQuery);