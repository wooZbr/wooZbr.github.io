var pageTo = "home.html"
var ptext = "Home"

function pageChange(pageTo, ptext) {
    document.getElementById("iContent").src = pageTo;
    document.title = ptext;
}