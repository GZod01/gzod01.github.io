var data = new FormData();
var theinputdata = document.getElementById("theinputdata")
var name = document.getElementById("thenameinput")
var contenthtml= `
<!DOCTYPE html>
<html>
  <head>
    <title>sample</title>
  </head>
  <body>
    <div id="header"></div>
    ${theinputdata}
    <div id="footer"></div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
	$(function(){
	  $("#header").load("https://gzod01.github.io/site/header.html");
	  $("#footer").load("https://gzod01.github.io/site/footer.html");
	});
    </script>
  </body>
</html>
`
data.append("html" , contenthtml);
data.append("name" , thename)
var xhr = new XMLHttpRequest();
xhr.open( 'post', 'htmlnew.php', true );
xhr.send(data);