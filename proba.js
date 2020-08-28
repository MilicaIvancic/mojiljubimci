////generisanje strane Kucni Psi 
var kucniPsi = [
  {
    name : "Pudla",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=628&alias=pudla-caniche",
    picture : {
      src : "slike/kucnipsi1.jpg",
      alt : "Pudla"
    }
  },
  {
    name : "Francuski buldog",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=623&alias=francuski-buldog-bouledogue-francais",
    
    picture : {
      src : "slike/kucnipsi2.jpg",
      alt : "Francuski buldog"
    }
  },
  {
    name : "Kavalirski španijel ",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=625&alias=kavalirski-spanijel-kralja-carlsa-cavalier-king-charles-spaniel",
    picture : {
      src : "slike/kucnipsi3.jpg",
      alt : "Kavalirski španijel kralja Čarlsa "
    }
  },
  {
    name : "Tibtanksi terijer",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=620&alias=tibetanski-terijer-tibetian-terrier",
    picture : {
      src : "slike/kucnipsi6.jpg",
      alt : "Tibetanski terijer"
    }
  },
  {
    name : "Čivava",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=624&alias=civava---kratkodlaka,-dugodlaka-chihuahua",
    picture : {
      src : "slike/kucnipsi4.jpg",
      alt : "Čivava"
    }
  },
  {
    name : "Bolonjski bišon",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=621&alias=bolonjski-bison-bolognese",
    picture : {
      src : "slike/kucnipsi5.jpg",
      alt : "Bolnjski bišon"
    }
  },
  {
    name : "Tibetanski španijel",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=619&alias=tibetanski-spanijel-tibetian-spaniel",
    picture : {
      src : "slike/kucnipsi7.jpg",
      alt : "Tibetanski španijel"
    }
  },
  {
    name : "King Čarls španijel",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=607&alias=king-carls-spanijel-king-charles-spaniel",
    picture : {
      src : "slike/kucnipsi8.jpg",
      alt : "King Čarls španijel"
    }
  },
  {
    name : "Basenji",
    description : "http://www.zivotinje.rs/enciklopedijaStrana.php?id=603&alias=basenji-basenji",
    picture : {
      src : "slike/kucnipsi9.jpg",
      alt : "Basenji"
    }
  },
];

function generisiStranuKucniPsi()
{
  document.getElementById("psi").innerHTML = "";
  for(var i = 0; i < kucniPsi.length; i++) {
    var pas = '<div class="pas">'
                  + '<h3 class="naslovRase">'+ kucniPsi[i].name +'</h3>'
                  + '<div class="slikaRase"><img src="'+ kucniPsi[i].picture.src +'" alt="'+ kucniPsi[i].picture.alt +'"/></div>'
                  + '<a href="'+ kucniPsi[i].description +'"> Za više detalja kliknite na link.</a></div>';
				 


    document.getElementById("psi").innerHTML += pas;
  }
};
generisiStranuKucniPsi();

