$(document).ready(function(){
	
	$("#preko1 p").hide();
	$("#vesti3").hover(
	function(){
		
		$("#preko1 p").fadeIn("slow");
		$("#preko1").addClass("transparentno");
	},
	function(){
		$("#preko1").removeClass("transparentno");
		$("#preko1 p").fadeOut("fast");
	});
	//////////////////////////
	$("#preko2 p").hide();
	$("#vesti2").hover(
	function(){
		
		$("#preko2 p").fadeIn("slow");
		$("#preko2").addClass("transparentno");
	},
	function(){
		$("#preko2").removeClass("transparentno");
		$("#preko2 p").fadeOut("fast");
	});
	///////////////////////////
	$("#preko3 p").hide();
	$("#vesti1").hover(
	function(){
		
		$("#preko3 p").fadeIn("slow");
		$("#preko3").addClass("transparentno");
	},
	function(){
		$("#preko3").removeClass("transparentno");
		$("#preko3 p").fadeOut("fast");
		
		
	});
	
	
	
	//$(".vesti").mouseover(function(){$(".preko").addClass("transparentno");});
});

//kod za slajder
window.onload= function(){
var slika=document.getElementById("slajder1");
var nizSlika=["slike/ljubimci3.jpg","slike/drugari1.jpg","slike/prijatelj.jpg","slike/ljubimci1.jpg"];
var index=0;
function slajder()
{
	console.log(slika);
	//slika.removeAttribute("src");
    slika.setAttribute("src",nizSlika[index]);
    index++;
    if(index>=nizSlika.length)
    {
    index=0;
    }
}
setInterval(slajder,3000);
}

// objekat
var products = [
  {
    name : "Ana",
    description : "Pored mene će Vaše dete zavoleti knjige.",
    price : 2000,
    picture : {
      src : "slike/dadilja1.jpg",
      alt : "Kuče učiteljica Ana"
    }
  },
  {
    name : "Teo",
    description : "Pored mene će se vaše dete zanimati uz najbolje bajke sveta.",
    price : 2550,
    picture : {
      src : "slike/dadilja2.jpg",
      alt : "Kuče učiteljica Teo"
    }
  },
  {
    name : "Miki",
    description : "Pored mene će Vaše postati akademski građanin.",
    price : 1700,
    picture : {
      src : "slike/dadilja3.jpg",
      alt : "Kuče učiteljica Miki"
    }
  },
  {
    name : "Žare",
    description : "U zdravom telu zdrav duh, ali i jezik!",
    price : 2600,
    picture : {
      src : "slike/dadilja4.jpg",
      alt : "Kuče učiteljica Žare"
    }
  },
  {
    name : "Vuk",
    description : "Pored mene nećete morati da brinete o zdravlju Vašeg deteta.",
    price : 1800,
    picture : {
      src : "slike/dadilja5.jpeg",
      alt : "Kuče učiteljica Vuk"
    }
  },
  {
    name : "Petar",
    description : "Učenje kroz igru je najkvalitetnije iskorišćeno vreme.",
    price : 1600,
    picture : {
      src : "slike/dadilja6.jpg",
      alt : "Kuče učiteljica Petar"
    }
  },
  {
    name : "Leon",
    description : "Vaše dete će postati prvak u vezivanju pertli.",
    price : 1500,
    picture : {
      src : "slike/dadilja7.jpg",
      alt : "Kuče učiteljica Leon"
    }
  },
  {
    name : "Radiša",
    description : "Uz Radišu snaga nikada neće predstavljati problem!",
    price : 2100,
    picture : {
      src : "slike/dadilja8.jpg",
      alt : "Kuče učiteljica Radiša"
    }
  },
  {
    name : "Dositej",
    description : "Razvijaću inteligenciju Vaše deteta od malih nogu.",
    price : 1900,
    picture : {
      src : "slike/dadilja9.jpg",
      alt : "Kuče učiteljica Dositej"
    }
  },
];

//kod za dinamicko popunjavanje liste 
window.addEventListener("load", napraviListu);
function napraviListu()
{
	var mojaLista, ispis, broj;

	mojaLista	= new Array("Cena rastuce", "Cena opadajuce", "Naziv od A-Z", "Naziv od Z-A");
	

	ispis = "<option value='0'>Izaberite</option>";
	for(var i = 0; i < mojaLista.length; i++)
	{	
		broj = i + 1;
		ispis += "<option value='"+broj+"'>" + mojaLista[i] + "</option>";
	}
	
	
	document.getElementById("sort").innerHTML = ispis;
};

//kod za automatsko generisanje strane
function generisiStranu()

{       
   var artikal='<div class="obuhvati">';
  
  for(var i = 0; i < products.length; i++) {
	  if( i==2 || i==5){
		  artikal+='<div class="artikal">'
                  + '<h3 class="naslov">'+ products[i].name +'</h3>'
                  + '<p class="opisArtikal">'+ products[i].description +'</p>'
                  + '<p><span class="opisPolja">Cena:</span><span class="cena">'+ products[i].price +' po danu</span></p>'
                  + '<div class="slika"><img src="'+ products[i].picture.src +'" alt="'+ products[i].picture.alt +'"/></div></div> </div> <div class="obuhvati">';
				  
	  }else{
    artikal+= '<div class="artikal">'
                  + '<h3 class="naslov">'+ products[i].name +'</h3>'
                  + '<p class="opisArtikal">'+ products[i].description +'</p>'
                  + '<p><span class="opisPolja">Cena:</span><span class="cena">'+ products[i].price +' po danu</span></p>'
	  + '<div class="slika"><img src="'+ products[i].picture.src +'" alt="'+ products[i].picture.alt +'"/></div></div>';}
	  
  }
  artikal+='</div>';
  document.getElementById("artikli").innerHTML= artikal;
};
generisiStranu();

//kod za sortiranje
  function sortiraj(tipSortiranja) {
    switch(tipSortiranja) {
      case "1":
        products.sort(function (prod1, prod2){
          return prod1.price > prod2.price;
        });
      break;
      case "2":
        products.sort(function (prod1, prod2){
          return prod1.price < prod2.price;
        });
      break;
      case "3":
        products.sort(function (prod1, prod2){
          return prod1.name > prod2.name;
        });
      break;
      case "4":
        products.sort(function (prod1, prod2){
          return prod1.name < prod2.name;
        });
      break;
      default:
      break;
    }

    generisiStranu();
  };
  
  var lista = document.getElementById("sort");
  lista.onchange = function()
  {
    var odabranIndex = lista.selectedIndex;
    var tip = lista.options[odabranIndex].value;
    sortiraj(tip);
  };
  
 //kod za padajuci meni
$(document).ready(function(){
	$('#meni li ul').css({
		display:"none", 
		left:"auto"
		});
	$('#meni li').hover(function(){
	$(this)
	.find('ul')
	.stop(true,true)
	.slideDown('slow');
	},
	function(){
	$(this)
	.find('ul')
	.stop(true,true)
	.fadeOut('slow');
	});
});


