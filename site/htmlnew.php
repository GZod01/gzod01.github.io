if(!empty($_POST['html'])){
$data = $_POST['html'];
$name = $_POST['name']
$fname = "$name.html";

$file = fopen("upload/" .$fname, 'w');
fwrite($file, $data);
fclose($file);
}
