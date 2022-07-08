# SimLib documentation

Remember to place a semilicon (;) at the end of every line when coding in JavaScript!

## Commands you will most likely use

write(text) or wrt(text) - Writes text on the screen

clear() or clr() - Clears the screen

draw(source) or drw(source) - Draws any kind of image supported by the browser

make_header(content) or mk_hdr(content) - Writes a big and bold text on the screen

cache_content() or che_cont() - Caches the page's contents to be restored later

recoverCachedContent() or rcveChedCont() - Restores the cached content saved after using the cache_content function (currently rendered items are kept)

set_title(new_title) or set_ttl() - Changes the page's title

stream(source, parameters) or str(source, parameters) - Streams any kind of video supported by the browser with paramaters. 
The paramaters field is required but can handle spaces

## Commands rarely used

line() ord l() - Creates a straight line

embed(source, width, height) or  - Embeds another page inside the page

## Development commands

update() or updt() - Updates the old_content variable (only needed if you are making your own command)