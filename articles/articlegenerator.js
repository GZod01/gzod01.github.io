function articlegenerator() {
    var title = document.getElementById("title")
    var fewdescript = document.getElementById("fewdescript")
    var mainimage = document.getElementById("mainimage")
    var articlecontent = document.getElementById("articlecontent")
    var author = document.getElementById("author")
    var dateofpublish = document.getElementById("dateofpublish")
    var other = document.getElementById("other")
    var articlehtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Template</title>
        </head>
        <body>
            <div id = "header"></div>
            <div id = "content">
                <div id= "title">
                    <h1>${title}</h1>
                </div>
                <div id = "main image">
                    <img src="${mainimage}">
                </div>
                <div id = "few description">
                    <p>${fewdescript}</p>
                </div>
                <div id = "articlecontent">
                    ${articlecontent}
                </div> 
                <div id = "infos">
                    <p>Author: ${author}</p>
                    <p>Date Of Publish: ${dateofpublish}</p>
                    <p>Other: ${other}</p>
                </div>
            </div>
            <div id= "footer"></div>
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
console.log(articlehtml)
const link = document.querySelector('a.htmldownload');

let name = title;

let text = articlehtml;

link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

link.setAttribute('download', `${name.toLowerCase()}.txt`);
}
