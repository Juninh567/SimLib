//Creates all variables needed
var env = document.getElementById("enviroment");
var old_content = "";
var cached_content;
var NavTitle = document.getElementById("page_title")
//Clears the screen
function clear(){
    env.innerHTML = "";
    update();
}
//Updates the display (only needed if you are making your own command)
function update(){
    old_content = env.innerHTML;
}
//Writes text on the screen
function write(text){
    env.innerHTML = old_content + "<p>" + text + "</p>";
    update();
}
//Draws any kind of image supported by the browser
function draw(source){
    env.innerHTML = old_content + "<img src='" + source + "' />";
    update();
}
//Writes a big and bold text on the screen
function make_header(content){
    env.innerHTML = old_content + "<h1>" + content + "</h1>";
    update();
}
//Caches the page's contents to be restored later
function cache_content(){
    cached_content = env.innerHTML;
}
//Restores the cached content saved after using the cache_content function
function recoverCachedContent(){
    env.innerHTML = old_content + cached_content;
    update();
}
//Changes the page's title
function set_title(new_title){
NavTitle.innerHTML = new_title + " (Made with SimLib)";
}
//Streams any kind of video supported by the browser with paramaters
//The paramaters field is required but can be left empty
function stream(source, parameters){
    env.innerHTML = old_content + "<video src='" + source + "' " + parameters + "></video>"
    update();
}
//Creates a straight line (ain't much but honest work)
function line(){
    env.innerHTML = old_content + "<hr>";
    update();
}
//Embeds another page inside the page
function embed(source, width, height){
    env.innerHTML = old_content + "<iframe src='" + source + "' width='" + width + "'" + "height='" + height + "'></iframe>";
    update();
}