"use strict"

let _btnColore;
let _btnDimensione;
let _btnSfondo;
let _btnBordo;
let _btnImg1;
let _btnImg2;
let _btnImg3;
let _btnClear;

let _titolo;
let _txtSize;
let _imgBox;

let cambiaCol=true;
let cambiaSfo=true;
let cambiaBor=true;

window.onload=function(){
	_btnColore=document.getElementById("btnColore");
	_btnColore.setAttribute("onclick","cambiaColore()");
	
	_titolo=document.getElementById("titolo");
	_btnDimensione=document.getElementById("btnDimensione");
	
	_btnDimensione.setAttribute("onclick","cambiaDimensione()");
	_txtSize=document.getElementById("txtSize");
	
	_btnSfondo=document.getElementById("btnSfondo");
	_btnSfondo.setAttribute("onclick","cambiaSfondo()");
	
	_btnBordo=document.getElementById("btnBordo");
	_btnBordo.setAttribute("onclick","cambiaBordo()");
	
	_btnImg1=document.getElementById("btnImg1");
	_btnImg1.setAttribute("onclick","caricaImmagine(1)");
	_btnImg2=document.getElementById("btnImg2");
	_btnImg2.setAttribute("onclick","caricaImmagine(2)");
	_btnImg3=document.getElementById("btnImg3");
	_btnImg3.setAttribute("onclick","caricaImmagine(3)");
	_imgBox=document.getElementById("imgBox");
	
	_btnClear=document.getElementById("btnClear");
	_btnClear.setAttribute("onclick","clearImg()"); // funziona solo se nel nome della funzione c'è una maiuscola
}

function cambiaColore(){
	if(cambiaCol)
	{
		_titolo.style.cssText+="color:blue; background-color:yellow;";
		cambiaCol=false;
	}
	else
	{
		_titolo.style.cssText+="color:yellow; background-color:blue;";
		cambiaCol=true;
	}
}

function cambiaDimensione(){
	_titolo.style.fontSize=_txtSize.value+"px";
}

function cambiaSfondo(){
	if(cambiaSfo)
	{
		document.body.style.cssText+="background-color:#eaeaea; background-image:url(img/bg.gif); background-position:center; background-repeat:repeat-y;";
		document.getElementById("wrapper").style.cssText="border:none; box-shadow:none; margin-top:50px;";
		cambiaSfo=false;
	}
	else
	{
		document.body.style.cssText+="background-color:#1e90ff; background-image:none;";
		document.getElementById("wrapper").style.cssText="border:1px solid black; box-shadow:0 0 20px 7px black; margin-top:30px;";
		cambiaSfo=true;
	}
}

function cambiaBordo(){
	if(cambiaBor)
	{
		_titolo.style.border="none";
		cambiaBor=false;
	}
	else
	{
		_titolo.style.border="2px solid red";
		cambiaBor=true;
	}
}

function caricaImmagine(n){
	_imgBox.src="img/img"+n+".jpg";
	_imgBox.style.visibility="visible";
}

function clearImg(){ // se al posto di clearImg metto solo clear non funziona
	_imgBox.style.visibility="hidden";
}

function generaNumero(min,max){
	let n=Math.floor((max-min+1)*Math.random()+min);
	return n;
}