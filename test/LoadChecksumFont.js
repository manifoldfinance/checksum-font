
function _inject(m) {
	var e = this.responseText, 
	    h = document.getElementsByTagName("head")[0], 
	    a = document.getElementsByTagName("meta")[0], 
	    s = document.createElement("style"); 
	s.media = "screen";
	s.textContent = e;
	if ("undefined" != typeof s) {
		h.insertBefore(h.appendChild(s), a);
	}
}

function loadFonts(sUrl, timeout, width) {

	if (width < (window.innerWidth || document.documentElement.clientWidth || document.getElementBbyTagName("body").clientWidth)) {

		if (typeof console != "undefined") {
			console.time("Process");
		}

		var args = Array.prototype.slice.call(arguments, 3), xhr = new XMLHttpRequest();
		xhr.ontimeout = function () {
			console.error("The request for " + sUrl + " timed out.");
		};
		xhr.onload = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					_inject.apply(xhr, args);
					document.querySelector("html").classList.add("wf-active");
					console.log("Fonts Loaded! class `.wf-active` added,");
				} else {
					console.error(xhr.statusText);
				}
			}
			if (typeof console != "undefined") {
				console.timeEnd("Process");
			}
		};
		xhr.open("GET", sUrl, true);
		xhr.timeout = timeout;
		xhr.send(null);
	}
}

// Loads fonts
loadFonts("https://fonts.googleapis.com/css?family=Open+Sans%7CNoto+Sans", 1500, 680);

https://spaces.cache.storage/fonts/checksum/Checksum.otf