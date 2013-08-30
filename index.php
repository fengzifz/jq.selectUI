<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>selectUI</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="css/layout.css" rel="stylesheet">
<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="js/jq.selectUI.js"></script>
<!-- <script type="text/javascript" src="js/HTML.js"></script> -->
</head>
<body id="body">
    <div class="test">
    <form method="get" action="action.php">
        <div class="row">
            <span class="label">Your name:</span>
            <input type="text" name="name" id="name" />
        </div>
    	<div class="row clearfix">
            <label class="label">Your language:</label>
            <select id="language" name="language" class="changeStyle">
                <option>Javascript</option>
                <option>PHP</option>
                <option>Ruby</option>
                <option>HTML/CSS</option>
                <option>Java</option>
            </select>
        </div>
        <div class="row clearfix">
            <label class="label">Your color:</label>
            <select id="color" name="color" class="changeStyle">
                <option>red</option>
                <option>blue</option>
                <option>black</option>
            </select>
        </div>
        <div class="row clearfix">
            <label class="label">Default UI</label>
            <select id="default" name="default">
                <option>No changed 1</option>
                <option>No changed 2</option>
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
(function($){
    var option = {showTop: false, showBottom: false};
    $('.changeStyle').selectUI(option);
})(jQuery)

</script>