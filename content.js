window.onload = function () {
	if (window.location.hostname == "www.amazon.fr") {
		var path = window.location.pathname.split('/')[1];
		if (path == "s") {
			var page = document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item");
			var liste = [];
			for (var i = 0; i < page.length; i++) {
				var note = page[i].getElementsByClassName("a-icon-alt")[0];
				if (!note)
					continue;
				else
					note = note.innerHTML;
				var num = page[i].getElementsByClassName("a-size-base")[0].innerHTML;
				num = num.indexOf('&nbsp;') >= 0 ? num.split('&nbsp;').join('') : num;
				var score = ((note[0] + note[2]) - 40) * num;
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
				var num = page[i].getElementsByClassName("a-size-base")[0].innerHTML;
				num = num.indexOf('&nbsp;') >= 0 ? num.split('&nbsp;').join('') : num;
				var score = ((note[0] + note[2]) - 40) * num;

				if (score == Math.max.apply(Math, liste)) {
					document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item")[i].getElementsByClassName("a-size-base")[0].parentNode.parentNode.innerHTML += "<br/><b><h1 style=\"color:Red;\"> MEILLEURE OFFRE (" + score + ") </h1></b>";
				} else
					document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item")[i].getElementsByClassName("a-size-base")[0].parentNode.parentNode.innerHTML += "<br/><b> Score (" + score + ")</b>";
			}
		}
		if (path == "gp") {
			var page = document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item");
			var liste = [];
			for (var i = 0; i < page.length; i++) {
				var note = page[i].getElementsByClassName("a-icon-alt")[0];
				if (!note)
					continue;
				else
					note = note.innerHTML;
				var num = page[i].getElementsByClassName("a-size-small a-link-normal")[0].innerHTML;
				num = num.indexOf('&nbsp;') >= 0 ? num.split('&nbsp;').join('') : num;
				var score = ((note[0] + note[2]) - 40) * num;
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
				var num = page[i].getElementsByClassName("a-size-small a-link-normal")[0].innerHTML;
				num = num.indexOf('&nbsp;') >= 0 ? num.split('&nbsp;').join('') : num;
				var score = ((note[0] + note[2]) - 40) * num;
				if (score == Math.max.apply(Math, liste)) {
					document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item")[i].getElementsByClassName("a-size-small a-link-normal")[0].parentNode.parentNode.innerHTML += "<b><h1 style=\"color:Red;\"> MEILLEURE OFFRE (" + score + ") </h1></b><br/>";
				} else {
					document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item")[i].getElementsByClassName("a-size-small a-link-normal")[0].parentNode.parentNode.innerHTML += "<b> Score (" + score + ")</b>";
				}
			}
		}
	}
}