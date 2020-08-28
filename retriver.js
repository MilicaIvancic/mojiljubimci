
////generisi stranu retriveri 
var nizRetriveri = [
  {
    name : "Labrador retriver",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=522&alias=labrador-retriver-labrador-retriever",
    picture : {
      src : "slike/retriver1.jpg",
      alt : "Labrador retriver"
    }
  },
  {
    name : "Ravnodlaki retriver",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=523&alias=ravnodlaki-retriver-flat-coated-retriever",
    
    picture : {
      src : "slike/retriver2.jpg",
      alt : "Ravnodlaki retriver"
    }
  },
  {
    name : "Toling retriver ",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=524&alias=toling-retriver-nova-scotia-duck-tolling-retriever",
    picture : {
      src : "slike/retriver3.jpg",
      alt : "Toling retriver "
    }
  },
  {
    name : "Kovrdžavi retriver",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=521&alias=kovrdzavi-retriver-curly-coated-retriever",
    picture : {
      src : "slike/retriver6.jpg",
      alt : "Kovrdžavi retriver"
    }
  },
  {
    name : "Zlatni retriver",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=525&alias=zlatni-retriver-golden-retriever",
    picture : {
      src : "slike/retriver4.jpg",
      alt : "Zlatni retriver"
    }
  },
  {
    name : "Čizopik retriver",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=520&alias=cizopik-retriver-chesapeake-bay-retriever",
    picture : {
      src : "slike/retriver5.jpg",
      alt : "Čizopik retriver"
    }
  }
];

function generisiStranuRetriveri()
{
	var pas='<div class="obuhvatinas">';

  for(var i = 0; i < nizRetriveri.length; i++) {
	  if(i==2){
		  pas += '<div class="pas">'
                  + '<h3 class="naslovRase">'+ nizRetriveri[i].name +'</h3>'
                  + '<div class="slikaRase"><img src="'+ nizRetriveri[i].picture.src +'" alt="'+ nizRetriveri[i].picture.alt +'"/></div>'
	  + '<a href="'+ nizRetriveri[i].description +'"> Za više detalja kliknite na link.</a></div></div> <div class="obuhvatinas">';
	  }
	  else{
     pas += '<div class="pas">'
                  + '<h3 class="naslovRase">'+ nizRetriveri[i].name +'</h3>'
                  + '<div class="slikaRase"><img src="'+ nizRetriveri[i].picture.src +'" alt="'+ nizRetriveri[i].picture.alt +'"/></div>'
	  + '<a href="'+ nizRetriveri[i].description +'"> Za više detalja kliknite na link.</a></div>';}
				 
    
  }
  pas+='</div>';
  document.getElementById("retriveri").innerHTML = pas;
};
generisiStranuRetriveri();