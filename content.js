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
			path2 = "a-link-normal a-text-normal";
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
			var prix = page[i].getElementsByClassName("p13n-sc-price")[0];
			if (!prix)
				continue;
			else
				prix = prix.innerHTML;
			prix = prix.split('&nbsp;').join('').split(',').join('').split('€').join('');
			var score = Math.round(((note[0] + note[2]) - 44) * num * prix / 100000);
			liste.push(score);
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
			var prix = page[i].getElementsByClassName("p13n-sc-price")[0];
			if (!prix)
				continue;
			else
				prix = prix.innerHTML;
			prix = prix.split('&nbsp;').join('').split(',').join('').split('€').join('');
			var score = Math.round(((note[0] + note[2]) - 44) * num * prix / 100000);
			var color = "Grey";
			var message = "";
			
			liste.sort(function(a, b) {
			  return a - b;
			});
			
			var min = Math.min.apply(Math, liste);
			var max = Math.max.apply(Math, liste);
			
			var indexScore = Math.round((liste.findIndex((element) => element == score) + 1) / liste.length * 100);
			
			if (score <= 0)
			{
				color = "Brown";
				message = "Déchet";
			}
			if (score > 0)
			{
				color = "Black";
				message = "Ordinaire";
			}
			if (indexScore >= 50)
			{
				color = "Green";
				message = "Rare";
			}
			if (indexScore >= 75)
			{
				color = "Purple";
				message = "Épique";
			}
			if (indexScore >= 95)
			{
				color = "Orange";
				message = "Légendaire";
			}
			
			score = indexScore;

			if (path == "s") {
				document.getElementsByClassName("s-result-list")[0].getElementsByClassName("s-result-item")[i].getElementsByClassName("a-size-base")[0].parentNode.parentNode.innerHTML += "<br/><b><div style=\"color:" + color + ";\"> " + message + " (" + score + "%) </div></b>";
			}
			if (path == "gp") {
				document.getElementById("zg-ordered-list").getElementsByClassName("a-list-item")[i].getElementsByClassName("a-size-small a-link-normal")[0].parentNode.parentNode.innerHTML += "<b><div style=\"color:" + color + ";\"> " + message + " (" + score + "%) </div></b><br/>";
			}
		}
	}
}
