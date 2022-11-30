if(!empty($_POST['data'])){
$data = $_POST['data'];
$name = $_POST['name']
$fname = "$name.html";

$file = fopen("upload/" .$fname, 'w');
fwrite($file, $data);
fclose($file);
}
