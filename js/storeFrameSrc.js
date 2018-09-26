var source = null;
var frm = null;
var num = -1;
var time1;
var time2;

function refreshOrClose(){
	time1 = new Date().getTime();
	localStorage.setItem("time1", time1);
	if (localStorage.getItem("time2") == null) {
		return true;
	}else if(time1 - localStorage.getItem("time2") > 3000){
		return true;
	}else{
		return false;
	}
}

function storeMainiframeSrc(source){
	localStorage.setItem("mainSource", source);	
}

function changeMainiframeSrc(){
	if (refreshOrClose() || localStorage.getItem("mainSource") == null || localStorage.getItem("childSource0") == null 
			|| localStorage.getItem("childSource1") == null || localStorage.getItem("childSource2") == null 
			|| localStorage.getItem("childSource3") == null || localStorage.getItem("childSource4") == null) {
		init();
	}
	document.getElementById("mainiframe").src = localStorage.getItem("mainSource");	
	changeMainiframeHeight();
}

function changeMainiframeHeight() {
	var iframe = document.getElementById("mainiframe");
	var source = localStorage.getItem("mainSource");
	var child = localStorage.getItem("childSource"+num);
	switch(source) {
		case "html/mainpage.html": 
			iframe.style.height = 910+"px"; 
			break;
			
		case "html/about.html": 			
			iframe.style.height = 1205+"px"; 
			break;
			
		case "html/servicesubject.html": 			 
			iframe.style.height = 1240+"px";
			break;
			
		case "html/productcenter.html": 		
			iframe.style.height = 1365+"px"; 
			break;
			
		case "html/contact.html": 		
			iframe.style.height = 1000+"px"; 
			break;
			
		case "html/disclaimer.html": 
			iframe.style.height = 1365+"px"; 
			break;
	}
}

function storeChildiframeSrc(source, num){
	localStorage.setItem("childSource"+num, source);
}

function changeChildiframeSrc(frm, num){
	document.getElementById(frm).src = localStorage.getItem("childSource"+num);
}

function onunload(){
	time2 = new Date().getTime();
	localStorage.setItem("time2", time2);
}

function init(){
	localStorage.setItem("mainSource", "html/mainpage.html");
	localStorage.setItem("childSource0", "frmdisclaimer.html");
	localStorage.setItem("childSource1", "frmaboutprofile.html");
	localStorage.setItem("childSource2", "frmserviceinclude.html");
	localStorage.setItem("childSource3", "frmproductshowdoor.html");
	localStorage.setItem("childSource4", "frmcontact.html");
}