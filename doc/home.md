# SimLib documentation

<span style="color:red">Remember to place a semilicon (;) at the end of every line when using JavaScript!</span>

## Commands you will most likely use

write(text) - Writes text on the screen

clear() - Clears the screen

draw(source) - Draws any kind of image supported by the browser

make_header(content) - Writes a big and bold text on the screen

cache_content() - Caches the page's contents to be restored later

recoverCachedContent() - Restores the cached content saved after using the cache_content function (currently rendered items are kept)

set_title(new_title) - Changes the page's title

stream(source, parameters) - Streams any kind of video supported by the browser with paramaters. 
The paramaters field is required but canupdate() handle spaces

## Commands rarely used

line() - Creates a straight line

embed(source, width, height) - Embeds another page inside the page

## Development commands

update() - Updates the display (only needed if you are making your own command)
