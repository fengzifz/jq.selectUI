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
<body>
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
        <div class="row">
            <input type="submit" name="submitBtn" id="submit">
        </div>
    </form>
</body>
</html>
<script type="text/javascript">
query('#row');
function query(selector){
    var classNameReg = /^\.\S[\w\d]*/;
    var idNameReg = /^\#\S[\w\d]*/;
    // var a = selector.match(idNameReg);
    var idSelector = classNameReg.test(selector);
    alert(a);
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