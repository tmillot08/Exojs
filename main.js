/* Exo 2

var prenom = prompt ("Votre Prénom", "Thomas");

alert("Bonjour " + prenom);*/

/* Exo 3

var Prix = prompt ("Votre prix TTC", 0);

alert("Prix TTC" + Prix * 1.2);*/


/* Exo 4

var Celsius = prompt ("Température en Celcius", 0);

alert("Température en Farenheit:" + (Celsius * 1.8 + 32));

/* Exo 5

var monDiv = document.getElementsByTagName('div');

console.log(monDiv);

monDiv[0].setAttribute('id', 'test');

console.log(monDiv);

monDiv[0].setAttribute('class', 'maClasse');


/* Exo 6

monDiv[1].setAttribute("class", 'maClasse');

/* monDiv[1].setAttribute("style", "color:yellow;")

monDiv[1].setAttribute("style", "justify-content:center;");

var monTxt = document.getElementsByTagName('h2');
var divText = monDiv[1].textContent;
var h1Text = monTxt[0].textContent;

monDiv[1].textContent = h1Text;
monTxt[0].textContent = divText;

monDiv[1].setAttribute("style", "text-align:right;");
monTxt[0].setAttribute("style", "text-align:left;");



/* Exo 7

monDiv[2].setAttribute("style", "color:red; float:left;");
monDiv[3].setAttribute("style", "color:green; float:left;");
monDiv[4].setAttribute("style", "color:blue; float:left;");

/* Exo 8 */

var myImg = document.getElementsByTagName('img');

var mySrc = myImg[0].getAttribute('src');
console.log(mySrc);

function mySwitch(){
  myImg[0].setAttribute("src", "trap.jpg");
  fadeIn()
};

function fadeIn(inter, op) {
  myImg[0].setAttribute("style", "opacity:0;")
  var inter = setInterval(time, 300);
  var op = 0;

    function time(){
      if (op >= 1.0) {
        clearInterval(inter);
        myImg[0].removeAttribute("onclick");

      }else {
        op += 0.05;
        myImg[0].style.opacity= op;

      };

    };
  }

  /* EXO 9


  document.querySelector("h1").onmouseenter = function(){
	this.style.color = "red";
  this.style.width = "100px";
};


document.querySelector("h1").onmouseleave = function(){
this.style.color = "inherit";
};

function move(){
  var pos = 0;
  var t = setInterval(movef, 300);
  function movef(){
    if (pos >= 47) {
      pos -= 2;
      document.querySelector("h1").style.marginLeft= pos + '%';
    } else {
      pos += 2;
      document.querySelector("h1").style.marginLeft= pos + '%';
    };
  };
};

/* Exo 10
var para = document.createElement("p");
var paraBis = document.createElement("p");
var Cont = document.createTextNode("Lorem ipsum Blablablablablablabla");
var Cont1 = document.createTextNode("Par osiris et ParaBIS tu sera un sanglier un sanglier");
para.appendChild(Cont);
paraBis.appendChild(Cont1);
var p = monDiv[5].appendChild(para);
var p = monDiv[5].appendChild(paraBis);
monDiv[5].style.display = "flex";
monDiv[5].style.alignItems= "center";
para.style.width = "50%";
para.style.textAlign = "center";
para.style.border = "2px solid black";
paraBis.style.width = "50%";
paraBis.style.textAlign = "center";
paraBis.style.border = "2px solid black"; */
