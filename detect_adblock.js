(function() {
	document.addEventListener("DOMContentLoaded", function() {
		// Create a "fake ad"
		var fake_ad = document.createElement('div');
		fake_ad.innerHTML = '&nbsp;';
		// Hide it from viewport
		fake_ad.setAttribute('style', 'top: -999px; position: fixed;');
		// Add some Adblock bait classes
		fake_ad.className = 'adsbox ad-300x250 banner-ad';
		// Append the ad to DOM
		document.body.appendChild(fake_ad);
		// Wait 500ms for the adblocker to do its job 
		window.setTimeout(function() {
			if (fake_ad.offsetHeight === 0) {
				// Add class .ab to body
				document.body.classList.add('ab');
				// For testing
				console.log("Adblock is enabled!");
				document.body.innerHTML += "Adblock is enabled!";
			} else {
				// For testing
				console.log("Adblock is disabled!");
				document.body.innerHTML += "Adblock is disabled!";
			}
			// Remove the fake ad from DOM
			document.body.removeChild(fake_ad);
		}, 500);
	});
})();
