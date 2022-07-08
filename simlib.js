var env = document.getElementById("enviroment");
var old_content = "";
var cached_content;
var NavTitle = document.getElementById("page_title")
function clear(){
    env.innerHTML = "";
    update();
}
function update(){
    old_content = env.innerHTML;
}
function write(text){
    env.innerHTML = old_content + "<p>" + text + "</p>";
    update();
}
function draw(source){
    env.innerHTML = old_content + "<img src='" + source + "' />";
    update();
}
function make_header(content){
    env.innerHTML = old_content + "<h1>" + content + "</h1>";
    update();
}
function cache_content(){
    cached_content = env.innerHTML;
}
function recoverCachedContent(){
    env.innerHTML = old_content + cached_content;
    update();
}
function set_title(new_title){
    NavTitle.innerHTML = new_title;
}
function stream(source, parameters){
    env.innerHTML = old_content + "<video src='" + source + "' " + parameters + "></video>"
    update();
}
function line(){
    env.innerHTML = old_content + "<hr>";
    update();
}
function embed(source, width, height){
    env.innerHTML = old_content + "<iframe src='" + source + "' width='" + width + "'px" + "height='" + height + "px'></iframe>";
    update();
}
function cacheReset(){
    cached_content = "";
    update();
}
function redirect(url){
    window.location.href=url;
}
function getUsers(value){
    if (value == "browser"){
        navigator.userAgent;
    }
}