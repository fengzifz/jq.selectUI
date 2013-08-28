<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>selectUI</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="css/layout.css" rel="stylesheet">
<script type="text/javascript" src="js/selectUI.js"></script>
</head>
<body id="body">
    <div class="test">
    <form method="get" action="action.php">
        <div class="row">
            <span class="label">Your name:</span>
            <input type="text" name="name" id="name" />
        </div>
    	<div class="row">
            <span class="label">Your language:</span>
                <select id="language" name="language">
                <option>Javascript</option>
                <option>PHP</option>
                <option>Ruby</option>
                <option>HTML/CSS</option>
                <option>Java</option>
            </select>
        </div>
        <div id="row">
            <input type="submit" name="submitBtn" id="submit">
        </div>
    </form>
    </div>
</body>
</html>
<script type="text/javascript">
alert(document.getElementById('body').nodeType)
// query('body .test form div.row');
function query(selector){
    var _list = [], 
        temp, 
        i = 0, 
        j = 0, 
        _el = [];

    // var classNameReg = /^\.\S[\w\d]*/;
    var idNameReg = /^\#\S[\w\d]*/;
    var classNameReg = /[\w\d]*\.\S[\w\d]*/;
    // var a = selector.match(idNameReg);
    // var idSelector = idNameReg.test(selector);
    // var classSelector = classNameReg.test(selector);
    // alert(class2.test(selector));
    if(/^\#\S[\w\d]*/.test(selector)){
        temp = selector.substr(1, selector.length - 1);
        _list.push(document.getElementById(temp));
    } else if(classNameReg.test(selector)){
        while(true){
            if(selector.indexOf(' ') != -1){
                i = selector.indexOf(' ');
                temp = selector.substr(j, i);
                selector = selector.substr(i + 1, selector.length - 1);
                if(!classNameReg.test(temp)){
                    _el.push(document.getElementsByTagName(temp));
                }
            } else if(selector.indexOf(' ') == -1 && selector.indexOf('.')){
                i = selector.indexOf('.');
                temp = selector.substr(j, i);
                selector = selector.substr(i + 1, selector.length - 1);
                break;
            }
            j = i;
        }


        // var _el = document.getElementsByTagName('*');
        // temp = selector.substr(1, selector.length - 1);
        // for(var i = 0; i < _el.length; i++){
        //     if(_el[i].className == temp){
        //         _list.push(_el[i]);
        //     }  
        // }
    }
    for(var i = 0; i < _list.length; i++){
        // alert(_list[i]);
    }
}


// function query(selector) {
//     var self = this.forEach ? this : [this];
//     for (var list=[], i=0, m=self.length; i<m; i++) {
//         var nodes = self[i].querySelectorAll(selector);
//         for (var j=0, l=nodes.length; j<l; j++) {
//             list.push(nodes[j]);
//         }
//     }
//     return _.list(list);
// }



    // var settings = {
    //     showTop: false
    // };
    // new SelectUI(settings);

    // var Calculator = function (decimalDigits, tax) {
    //         this.decimalDigits = decimalDigits;
    //         this.tax = tax;
    //         alert(this.add(11,3));
    //     };

    //      Calculator.prototype = function () {
    //         add = function (x, y) {
    //             return x + y;
    //         },

    //         subtract = function (x, y) {
    //             return x - y;
    //         }
    //         return {
    //             add: add,
    //             subtract: subtract
    //         }
    //     } ();

    //     // alert((new Calculator()).add(11, 3));
    //     new Calculator()
</script>