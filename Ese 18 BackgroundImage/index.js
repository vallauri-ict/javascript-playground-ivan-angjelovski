"use strict"

let _imgBox;
let _imgRoll;
let _opts;
let _lstImmagini;

window.onload=function(){
	_imgBox=this.document.getElementById("imgBox");
	_imgRoll=this.document.getElementById("imgRoll");
	_opts=this.document.getElementsByName("opt");
	_lstImmagini=this.document.getElementById("lstImmagini");

	// perchè al momento in cui carica l'immagine non si ridimensiona automaticamente, in base alla grandezza dell'immagine, il div?
	_imgBox.style.backgroundImage="url('img/img1.jpg')";
	_imgRoll.style.backgroundImage="url('img/img1.jpg')";

	for(let i=0;i<_opts.length;i++)
	{
		_opts[i].addEventListener("click", function() { cambiaImmagine(this); });
	}
}

function cambiaImmagine(selectedObject){
	let n=parseInt(selectedObject.value);
	_lstImmagini.selectedIndex=n;
	_opts[n].checked=true;
	console.log(n);
	_imgBox.style.backgroundImage="url(img/img"+(n+1)+".jpg)";
}

function roll_on(){
	let n=generaNumero(2,4);
	_imgRoll.style.backgroundImage="url(img/img"+n+".jpg)";
}

function roll_off(){
	_imgRoll.style.backgroundImage="url(img/img1.jpg)";
}

function generaNumero(min,max){
	return Math.floor((max-min+1)*Math.random()+min);
}