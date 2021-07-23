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
			num = num.replace(/\D/g,'');
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
			num = num.replace(/\D/g,'');
			var score = ((note[0] + note[2]) - 44) * num;
			
			var color = "Grey";
			var message = "";
			
			if (score > 0)
			{
				color = "Black";
			}
			if (score >= Math.max.apply(Math, liste) / 4)
			{
				color = "Blue";
				message = "Convenable";
			}
			if (score >= Math.max.apply(Math, liste) / 2)
			{
				color = "Green";
				message = "Bonne offre";
			}
			if (score == Math.max.apply(Math, liste))
			{
				color = "Red";
				message = "MEILLEURE OFFRE";
			}

			if (path == "s") {
				document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item")[i].getElementsByClassName("a-size-base")[0].parentNode.parentNode.innerHTML += "<br/><b><div style=\"color:" + color + ";\"> " + message + " (" + score + ") </div></b>";
			}
			if (path == "gp") {
				document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item")[i].getElementsByClassName("a-size-small a-link-normal")[0].parentNode.parentNode.innerHTML += "<b><div style=\"color:" + color + ";\"> " + message + " (" + score + ") </div></b><br/>";
			}
		}
	}
}
