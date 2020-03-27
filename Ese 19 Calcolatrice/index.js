"use strict"

let _btnNum;
let _txtDisplay;
let _btnOperatori;

let primoNumero;
let operatore;

function init(){
	_btnNum=document.getElementsByName("btnNum");
	_txtDisplay=document.getElementById("txtDisplay");
	_btnOperatori=document.getElementsByName("btnOperatore");
	
	_txtDisplay.value="";
	
	primoNumero=0;
	operatore="";
	
	for(let i=0;i<_btnNum.length;i++)
	{
		_btnNum[i].setAttribute("onclick","inputNumero("+i+")");
	}
	
	for(let i=0;i<_btnOperatori.length;i++)
	{
		_btnOperatori[i].setAttribute("onclick","inputOperatore("+i+")");
	}
}

function inputNumero(n){
	_txtDisplay.value+=_btnNum[n].value;
}

function inputOperatore(n){
	primoNumero=parseInt(_txtDisplay.value);
	_txtDisplay.value="";
	operatore=_btnOperatori[n].value;
}

function calcola(){
	let secondoNumero;
	if(_txtDisplay.value=="")
	{
		alert("DEVE ESSERE INSERITO IL SECONDO FATTORE");
		init();
	}
	else
	{
		secondoNumero=parseInt(_txtDisplay.value);
		console.log(secondoNumero);
		if(operatore=="+")
		{
			_txtDisplay.value=primoNumero+secondoNumero;
		}
		else if(operatore=="-")
		{
			_txtDisplay.value=primoNumero-secondoNumero;
		}
		else if(operatore=="*")
		{
			_txtDisplay.value=primoNumero*secondoNumero;
		}
		else if(operatore=="/")
		{
			_txtDisplay.value=primoNumero/secondoNumero;
		}
	}
	
}

function resetta(){
	init();
}

function generaNumero(min,max){
	let n=Math.floor((max-min+1)*Math.random()+min);
	return n;
}