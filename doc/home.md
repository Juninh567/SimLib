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

getUsers(value) or gUsr(value) - Get information from the user, currently "browser" is the only one currently available.

redirect(url) or redir(url) - Redirect user to the specified URL.

## Commands rarely used

line() or l() - Creates a straight line

cacheReset() or cheRes() - Clear the cached_content variable

embed(source, width, height) or emb(source, width, height) - Embeds another page inside the page

## Development commands

update() or updt() - Updates the old_content variable (only needed if you are making your own command)
