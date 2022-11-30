var data = new FormData();
data.append("data" , "the_text_you_want_to_save");
var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
xhr.open( 'post', '/path/to/php', true );
xhr.send(data);