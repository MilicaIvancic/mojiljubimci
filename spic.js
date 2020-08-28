////generisanje strane Kucni spic
$(document).ready( function(){
	
	$.ajax({
		"url":"proba.json",
		"type":"GET",
		"dataType":"json",
		"success":function(data){
			console.log(data);
		var pas="";		
  for(var i = 0; i < data.length; i++) {
     pas+= '<div class="pas">'
                  + '<h3 class="naslovRase">'+ data[i].name +'</h3>'
                  + '<div class="slikaRase"><img src="'+ data[i].picture.src +'" alt="'+ data[i].picture.alt +'"/></div>'
                  + '<a href="'+ data[i].description +'"> Za više detalja kliknite na link.</a></div>';
		}
		document.getElementById("spic").innerHTML=pas;
	},
	"error":function(error){
		
		console.log(error.status);
		
	}
	});
	
});

