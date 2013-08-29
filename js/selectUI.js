/**
 * 
 * @authors Damon (398846606@qq.com)
 * @date    2013-08-27 09:40:41
 * @version $Id$
 */

// 简单的选择器查询，支持$('#id'),$('div.class'),$('.class')，部分原型链函数支持简单的链式操作
(function(){
    function _$$(selector){
        this.list = [];
        var temp, tempTagName, tempTagEle = [], _el = [];
        var idNameReg = /^\#\S[\w\d]*/;
        var classNameReg = /[\w\d]*\.\S[\w\d]*/;
        if(idNameReg.test(selector)){
            temp = selector.substr(1, selector.length - 1);
            this.list.push(document.getElementById(temp));
        } else if(classNameReg.test(selector)){
            _el = document.getElementsByTagName('*');
            if(selector.charAt() == '.'){
                temp = selector.substr(selector.indexOf('.') + 1, selector.length - 1);
                for(var i = 0; i < _el.length; i++){
                    if(_el[i].className.indexOf(temp) != -1){
                        this.list.push(_el[i]);
                    }
                }
            } else {
                temp = selector.substr(selector.indexOf('.') + 1, selector.length - 1);
                tempTagName = selector.substr(0, selector.indexOf('.'));
                for(var i = 0; i < _el.length; i++){
                    if(_el[i].nodeName == tempTagName.toUpperCase()){
                        tempTagEle.push(_el[i]); 
                    }
                }
                for(var i = 0; i < tempTagEle.length; i++){
                    if(tempTagEle[i].className.indexOf(temp) != -1){
                        this.list.push(tempTagEle[i]);
                    }
                }
            }
        }
    }

    _$$.prototype = {
		each: function(fn, scope){
			for(var i = 0; i < this.list.length; i++){
				fn.call(scope || this, this.list[i]);
			}
			return this;
		},

		getChilds: function(){
			var el = [], j = 0;
			this.each(function(ele){
				var _el = [];
				for(var i = 0; i < ele.childNodes.length; i++){
					if(ele.childNodes[i].nodeType == 1){
						_el.push(ele.childNodes[i]);
					}
				}
				el[j] = _el;
				j++;
			});
			return el;
		},

		setStyle: function(prop, value){
			this.each(function(ele){
				ele.style[prop] = value;
			});
			return this;
		},

		alertTest: function(){
			this.each(function(){
				alert(1);
			});
		}
	};

    window.$$ = function(selector){
        return new _$$(selector);
    }
    //增加命名空间，防止冲突
    window['selectUI'] = {};
    window['selectUI']['$$'] = $$;
})();

function SelectUI(options){
	var defaultOptions = {
		selector: '',
		showTop: true,
		showBottom: true
	};
	this.init(options, defaultOptions);
	this.getSelectData();
}

SelectUI.prototype = function(){
	init = function(o1, o2){
		me = this; //Global
		for(var p in o2){
			typeof(o1[p]) != 'undefined' ? me[p] = o1[p] : me[p] = o2[p];
		}
		me.element = $$(me['selector']); 
		// me.element.alertTest();
	},

	createHTML = function(){

	},

	addHTML = function(){

	},

	setInnerHTML = function(){

	},

	getSelectData = function(){
		var selectData = [], _el, optObj = me.element.getChilds();
		for(var i = 0; i < optObj.length; i++){
			_el = [];
			for(var j = 0; j < optObj[i].length; i++){
				_el = optObj[i][j];
			}
			selectData[i] = _el;
		}
	},

	setSelectData = function(){

	},

	clickToShowDropdown = function(){

	},

	clickToSelect = function(){

	}

	return {
		init: init,
		getSelectData: getSelectData
	}

}();