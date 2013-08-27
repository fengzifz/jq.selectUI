<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>scrollUI</title>
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