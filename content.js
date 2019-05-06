window.onload = function () {
	if(window.location.hostname == "www.senscritique.com")
	{
		var Total = 0;
		var precision = 0;
		var Type = window.location.pathname.split("/")[1];
		if(typeof document.getElementsByClassName("pvi-scrating-value")[0] !== "undefined")
			var NoteGen = parseFloat(document.getElementsByClassName("pvi-scrating-value")[0].innerHTML);
		if(typeof document.getElementsByClassName("pvi-scrating-value")[1] !== "undefined")
			var NoteAmi = parseFloat(document.getElementsByClassName("pvi-scrating-value")[1].innerHTML);
		if(document.getElementsByTagName("time")[0].dateTime.substring(0,4))
			var Dat = document.getElementsByTagName("time")[0].dateTime.substring(0,4);
		if(typeof document.getElementsByClassName("pvi-stats-number")[0] !== "undefined")
		{
			var Nombre = parseFloat(document.getElementsByClassName("pvi-stats-number")[0].innerHTML);
			//if (Nombre % 1 != 0) Nombre *= 1000;
			if (document.getElementsByClassName("pvi-stats-number")[0].innerHTML.indexOf("K") >= 0) Nombre *= 1000;
		}
		if(Dat) precision+=3;
		if(NoteGen) precision+=3;
		if(NoteAmi) precision+=3;
		if(Nombre) precision+=3;
		var color = "";
		if (Type == "film"){
			if(Dat) {if(Dat > 2002) Total+=3; else if(Dat >= 2001) Total++;};
			if(NoteGen) {if(NoteGen > 6.2) Total+=3; else if(NoteGen >= 5.7) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.2) Total+=3; else if(NoteAmi >= 6.5) Total++;};	
			if(Nombre) {if(Nombre > 26479) Total+=3; else if(Nombre >= 20229) Total++;};
			Total = Total / precision * 9 + 1;
			if(Total > 8.1) color = "61F561"; else if(Nombre >= 6.1) color = "F5F561"; else color = "F56161";
		}
		if (Type == "serie"){
			if(Dat) {if(Dat > 2007) Total+=3; else if(Dat >= 2007) Total++;};
			if(NoteGen) {if(NoteGen > 7.0) Total+=3; else if(NoteGen >= 6.2) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.5) Total+=3; else if(NoteAmi >= 6.1) Total++;};	
			if(Nombre) {if(Nombre > 12678) Total+=3; else if(Nombre >= 9140) Total++;};	
			Total = Total / precision * 9 + 1;
			if(Total > 8.5) color = "61F561"; else if(Nombre >= 5.4) color = "F5F561"; else color = "F56161";
		}
		if (Type == "jeuvideo"){
			if(Dat) {if(Dat > 2009) Total+=3; else if(Dat >= 2009) Total++;};
			if(NoteGen) {if(NoteGen > 7.0) Total+=3; else if(NoteGen >= 6.5) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.9) Total+=3; else if(NoteAmi >= 7.4) Total++;};	
			if(Nombre) {if(Nombre > 3801) Total+=3; else if(Nombre >= 1723) Total++;};	
			Total = Total / precision * 9 + 1;
			if(Total > 7.4) color = "61F561"; else if(Nombre >= 4.9) color = "F5F561"; else color = "F56161";
		}
		if (Type == "livre"){
			if(Dat) {if(Dat < 1924) Total+=3; else if(Dat <= 1927) Total++;};
			if(NoteGen) {if(NoteGen < 7.6) Total+=3; else if(NoteGen <= 8.1) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.5) Total+=3; else if(NoteAmi >= 7.3) Total++;};	
			if(Nombre) {if(Nombre < 17330) Total+=3; else if(Nombre <= 30627) Total++;};	
			Total = Total / precision * 9 + 1;
			if(Total > 6.0) color = "61F561"; else if(Nombre >= 4.3) color = "F5F561"; else color = "F56161";
		}
		if (Type == "bd"){
			if(Dat) {if(Dat > 1995) Total+=3; else if(Dat >= 1991) Total++;};
			if(NoteGen) {if(NoteGen > 6.8) Total+=3; else if(NoteGen >= 6.4) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.2) Total+=3; else if(NoteAmi >= 6.9) Total++;};	
			if(Nombre) {if(Nombre > 7217) Total+=3; else if(Nombre >= 4917) Total++;};	
			Total = Total / precision * 9 + 1;
			if(Total > 7.0) color = "61F561"; else if(Nombre >= 6.1) color = "F5F561"; else color = "F56161";
		}
		if (Type == "album" || Type == "morceau"){
			if(Dat) {if(Dat > 2001) Total+=3; else if(Dat >= 1997) Total++;};
			if(NoteGen) {if(NoteGen < 7.5) Total+=3; else if(NoteGen <= 7.6) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.2) Total+=3; else if(NoteAmi >= 6.9) Total++;};	
			if(Nombre) {if(Nombre < 3775) Total+=3; else if(Nombre <= 4728) Total++;};	
			Total = Total / precision * 9 + 1;
			if(Total > 8.6) color = "61F561"; else if(Nombre >= 5.7) color = "F5F561"; else color = "F56161";
		}
		document.getElementsByClassName("pvi-scrating-value")[0].innerHTML = document.getElementsByClassName("pvi-scrating-value")[0].innerHTML + "<a style=\"color:#" + color + "\">  " + Total + "("+ (precision / 12 - 0.1) * 100 + "%)</a>";
	}
}