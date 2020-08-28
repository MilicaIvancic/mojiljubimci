$(document).ready(function(){

	
	document.getElementById("polje1").focus();
	
	
	
	document.getElementById("polje6").addEventListener("click", proveri);


var regIme = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9})?$/;
var regPrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9})?$/;
var regPasword = /^(.){8,20}$/;
var regEmail = /^[a-z]+(\.[a-z]+)+(\.[1-9][0-9]{0,3}\.(0[0-9]|1[0-7]))?\@ict\.edu\.rs$/;
var regLjubimac=/^[a-z]{3,}$/;



function proveri(){
	var ime1=document.getElementById("polje1").value;

var prezime1=document.getElementById("polje2").value;

var email1=document.getElementById("polje4").value;


var pasword1=document.getElementById("polje8").value;

var ljubimac1=document.getElementById("polje5").value;

if(!regIme.test(ime1))
	{
		$("#polje1").addClass("crveniBorder");
	}
	else
	{
		$("#polje1").removeClass("crveniBorder");
	}
	
	if(!regPrezime.test(prezime1))
	{
		$("#polje2").addClass("crveniBorder");
	}
	else
	{
		$("#polje2").removeClass("crveniBorder");
	}
	
	if(!regEmail.test(email1))
	{
		$("#polje4").addClass("crveniBorder");
	}
	else
	{
		$("#polje4").removeClass("crveniBorder");
	}
	
	if(!regPasword.test(pasword1))
	{
		$("#polje8").addClass("crveniBorder");
	}
	else
	{
		$("#polje8").removeClass("crveniBorder");
	}
	
		if(!regLjubimac.test(ljubimac1))
	{
		$("#polje5").addClass("crveniBorder");
	}
	else
	{
		$("#polje5").removeClass("crveniBorder");
	}
};
});