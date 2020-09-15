
function changeWindow(pos) {
	switch(pos) {
		case 0:
			document.getElementById("Main").style.display = "block";
			document.getElementById("AboutMe").style.display = "none";
			document.getElementById("Achievements").style.display = "none";
			document.getElementById("TotemAnimal").style.display = "none";
			document.getElementById("Quote").style.display = "none";
			document.getElementById("Formula").style.display = "none";
		break;
		case 1:
			document.getElementById("Main").style.display = "none";
			document.getElementById("AboutMe").style.display = "block";
			document.getElementById("Achievements").style.display = "none";
			document.getElementById("TotemAnimal").style.display = "none";
			document.getElementById("Quote").style.display = "none";
			document.getElementById("Formula").style.display = "none";
		break;
		case 2:
			document.getElementById("Main").style.display = "none";
			document.getElementById("AboutMe").style.display = "none";
			document.getElementById("Achievements").style.display = "block";
			document.getElementById("TotemAnimal").style.display = "none";
			document.getElementById("Quote").style.display = "none";
			document.getElementById("Formula").style.display = "none";
		break;
		case 3:
			document.getElementById("Main").style.display = "none";
			document.getElementById("AboutMe").style.display = "none";
			document.getElementById("Achievements").style.display = "none";
			document.getElementById("TotemAnimal").style.display = "block";
			document.getElementById("Quote").style.display = "none";
			document.getElementById("Formula").style.display = "none";
		break;
		case 4:
			document.getElementById("Main").style.display = "none";
			document.getElementById("AboutMe").style.display = "none";
			document.getElementById("Achievements").style.display = "none";
			document.getElementById("TotemAnimal").style.display = "none";
			document.getElementById("Quote").style.display = "block";
			document.getElementById("Formula").style.display = "none";
		break;
		case 5:
			document.getElementById("Main").style.display = "none";
			document.getElementById("AboutMe").style.display = "none";
			document.getElementById("Achievements").style.display = "none";
			document.getElementById("TotemAnimal").style.display = "none";
			document.getElementById("Quote").style.display = "none";
			document.getElementById("Formula").style.display = "block";
		break;
	}
}

