function changeDisplay(table) {
	if(table == "thTel"){
		var list = document.getElementById("trNumber");
		if(list.style.display == ""){
			list.style.display = "none";
		}else{
			list.style.display = "";
		}
	}else if(table == "thPurview") {
		var list = document.getElementById("trAddress");
		if(list.style.display == ""){
			list.style.display = "none";
		}else{
			list.style.display = "";
		}
	}
}