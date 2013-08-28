/**
 * 
 * @authors Damon (398846606@qq.com)
 * @date    2013-08-27 09:40:41
 * @version $Id$
 */

function SelectUI(options){
	var defaultOptions = {
		selector: '',
		showTop: true,
		showBottom: true
	};
	this.init(options, defaultOptions);
}

SelectUI.prototype = function(){
	init = function(o1, o2){
		me = this; //Global
		for(var p in o2){
			typeof(o1[p]) != 'undefined' ? me[p] = o1[p] : me[p] = o2[p];
		}
	},

	query = function(selector){
		
	},

	_createHTML = function(){

	},

	_addHTML = function(){

	},

	_setInnerHTML = function(){

	},

	_getSelectData = function(){

	},

	_setSelectData = function(){

	},

	_clickToShowDropdown = function(){

	},

	_clickToSelect = function(){

	}

	return {
		init: init
	}

}();