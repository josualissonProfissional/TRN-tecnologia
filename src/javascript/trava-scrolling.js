function unloadScrollBars() {
    document.documentElement.style.overflowX = 'hidden';
    document.body.scroll = "no"; // IE
}
unloadScrollBars(); 