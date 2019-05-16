window.onload = function () {
	if (window.location.hostname == "www.amazon.fr") {
		var path = window.location.pathname.split('/')[1];
		var page = "";
		var path1 = "";

		if (path == "s") {
			page = document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item");
			path1 = "a-size-base";
		}

		if (path == "gp") {
			page = document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item");
			path1 = "a-size-small a-link-normal";

		}

		var liste = [];

		for (var i = 0; i < page.length; i++) {
			var note = page[i].getElementsByClassName("a-icon-alt")[0];
			if (!note)
				continue;
			else
				note = note.innerHTML;
			var num = page[i].getElementsByClassName(path1)[0].innerHTML;
			num = num.indexOf('&nbsp;') >= 0 ? num.split('&nbsp;').join('') : num;
			var score = ((note[0] + note[2]) - 44) * num;
			if (score > 0) {
				liste.push(score);
			}
		}

		for (var i = 0; i < page.length; i++) {
			var note = page[i].getElementsByClassName("a-icon-alt")[0];
			if (!note)
				continue;
			else
				note = note.innerHTML;
			var num = page[i].getElementsByClassName(path1)[0].innerHTML;
			num = num.indexOf('&nbsp;') >= 0 ? num.split('&nbsp;').join('') : num;
			var score = ((note[0] + note[2]) - 44) * num;

			if (score == Math.max.apply(Math, liste)) {
				if (path == "s") {
					document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item")[i].getElementsByClassName("a-size-base")[0].parentNode.parentNode.innerHTML += "<br/><b><h1 style=\"color:Red;\"> MEILLEURE OFFRE (" + score + ") </h1></b>";
				}
				if (path == "gp") {
					document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item")[i].getElementsByClassName("a-size-small a-link-normal")[0].parentNode.parentNode.innerHTML += "<b><h1 style=\"color:Red;\"> MEILLEURE OFFRE (" + score + ") </h1></b><br/>";
				}
			} else {
				if (path == "s") {
					document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item")[i].getElementsByClassName("a-size-base")[0].parentNode.parentNode.innerHTML += "<br/><b> Score (" + score + ")</b>";
				}
				if (path == "gp") {
					document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item")[i].getElementsByClassName("a-size-small a-link-normal")[0].parentNode.parentNode.innerHTML += "<b> Score (" + score + ")</b>";
				}

			}
		}
	}
}
