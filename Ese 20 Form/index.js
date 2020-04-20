"use strict"

let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;
let _tel;

window.onload=function(){
	_cognome=this.document.getElementsByName("cognome")[0];
	_nome=this.document.getElementsByName("nome")[0];
	_matricola=this.document.getElementsByName("matricola")[0];
	_regione=this.document.getElementsByName("regione")[0];
	_email=this.document.getElementsByName("email")[0];
	_tel=this.document.getElementsByName("tel")[0];
	_regione.selectedIndex=-1;
}

function validaForm(){
	if(_cognome.value=="")
	{
		_cognome.classList.add("red-border");
		setTimeout(function(){ alert("ERRORE - Inserire il cognome"); }, 100);
		return false; // *** per non refreshare la pagina al submit ***
	}
	else if(_nome.value=="")
	{
		_cognome.classList.remove("red-border");
		_nome.classList.add("red-border");
		setTimeout(function(){ alert("ERRORE - Inserire il nome"); }, 100);
		return false;
	}
	else if(_matricola.value=="")
	{
		_nome.classList.remove("red-border");
		_matricola.classList.add("red-border");
		setTimeout(function(){ alert("ERRORE - Inserire la matricola"); }, 100);
		return false;
	}
	else if(_regione.selectedIndex==-1)
	{
		_matricola.classList.remove("red-border");
		_regione.classList.add("red-border");
		setTimeout(function(){ alert("ERRORE - Inserire la regione"); }, 100);
		return false;
	}
	else if(_email.value=="")
	{
		_regione.classList.remove("red-border");
		_email.classList.add("red-border");
		setTimeout(function(){ alert("ERRORE - Inserire l'indirizzo email"); }, 100);
		return false;
	}
	else if(_tel.value=="")
	{
		_email.classList.remove("red-border");
		_tel.classList.add("red-border");
		setTimeout(function(){ alert("ERRORE - Inserire il numero di telefono"); }, 100);
		return false;
	}
	else
	{
		window.open("index2.html");
	}
}

function soloNumeri(carattere){
	let ch=String.fromCharCode(carattere.which); // .which ritorna il tasto premuto sulla tastiera
	if(!(/[0-9]/.test(ch))) // qui controlla se il tasto battuto non è un numero tra 0 e 9
	{
		carattere.preventDefault(); // questo metodo cancella il carattere battuto così da non permettere all'utente di inserire una lettera
	}
}

function generaNumero(min,max){
	let n=Math.floor((max-min+1)*Math.random()+min);
	return n;
}