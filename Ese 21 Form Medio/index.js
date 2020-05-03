"use strict"

let _txtNome, _optSesso, _sltAteneo, _txtCap, _chkLav, _txtDescr;

window.onload = function inizializza()
{
    _txtNome = document.getElementById("nominativo");
    _optSesso = document.getElementsByName("sesso");
    _sltAteneo = document.getElementById("ateneo");
    _txtCap = document.getElementById("cap");
    _chkLav = document.getElementById("lavoratore");
    _txtDescr = document.getElementById("descr");
}

function ValidaForm()
{
	// campo nome e cognome
	
    let nome = _txtNome.value, output = "";
    let i = 0;
    while ((i < nome.length) && (isNaN(nome[i++])));
    if (!isNaN(nome[i - 1]))
    {
        _txtNome.classList.toggle("redBorder", true); // rimuove la classe redBorder se la trova nella lista classi 
        output += "\n- Caratteri non consentiti nel campo nome";
    }
    else
    {
        _txtNome.classList.toggle("redBorder", false);
        if(nome.length == 0)
        {
            _txtNome.classList.toggle("redBorder", true);
            output += "\n- Il nome non è presente";
        }
        else
            _txtNome.classList.toggle("redBorder", false);
    }
	
	
	
    // campo cap
	
    let cap = _txtCap.value;
    i = 0;
    while ((i < cap.length) && (!isNaN(cap[i++])));
    if (isNaN(cap[i - 1]))
    {
        _txtCap.classList.toggle("redBorder", true);
        output += "\n- Caratteri non consentiti nel CAP";
    }
    else
    {
        _txtCap.classList.toggle("redBorder", false);
        if(cap.length != 5)
        {
            _txtCap.classList.toggle("redBorder", true);
            output += "\n- Lunghezza non consentita del CAP";
        }
        else
            _txtCap.classList.toggle("redBorder", false);
    }
	
	
	
	// campo sesso

    if ((!_optSesso[0].checked) && (!_optSesso[1].checked))
        output += "\n- Inserire il sesso";
	
	
	
	// campo ateneo
	
    if (_sltAteneo.value == "nessuno")
    {
        output += "\n- Selezionare l'ateneo";
        _sltAteneo.classList.toggle("redBorder", true);
    }
    else
        _sltAteneo.classList.toggle("redBorder", false);
	
	
	
	// checkbox lavoro, se selezionato si attiva descrizione

    if ((_chkLav.checked) && (_txtDescr.value == ""))
    {
        output += "\n- Inserire una descrizione del lavoro";
        _txtDescr.classList.toggle("redBorder", true);
    }
    else
        _txtDescr.classList.toggle("redBorder", false);
	
	
	
	// Se la stringa output è vuota significa che è stato inserito tutto correttamente
	
    if (output == "")
    {
        alert("Registrazione completata");
        return true;
    }
    else
    {
        alert("Errore: " + output);
        return false;
    }
}

function Cap()
{
    let cap = _txtCap.value;
    let i = 0;
    while ((i < cap.length) && (!isNaN(cap[i++]))); // while !isNan --> finchè è un numero
    if (isNaN(cap[i - 1]))
    {
        _txtCap.classList.toggle("redBorder", true);
        alert("Caratteri non consentiti nel CAP");
    }
    else
    {
        _txtCap.classList.toggle("redBorder", false);
        if(cap.length != 5)
        {
            _txtCap.classList.toggle("redBorder", true);
            alert("Lunghezza non consentita del CAP");
        }
        else
            _txtCap.classList.toggle("redBorder", false);
    }
}

function Nome()
{
    let nome = _txtNome.value;
    let i = 0;
    while ((i < nome.length) && (isNaN(nome[i++])));
    if (!isNaN(nome[i - 1]))
    {
        _txtNome.classList.toggle("redBorder", true);
        alert("Caratteri non consentiti nel nome");
    }
    else
    {
        _txtNome.classList.toggle("redBorder", false);
        if(nome.length == 0)
        {
            _txtNome.classList.toggle("redBorder", true);
            alert("Inserire il nome");
        }
        else
            _txtNome.classList.toggle("redBorder", false);
    }
}

function Desc()
{
    if (_chkLav.checked)
        _txtDescr.disabled = false;
    else
        _txtDescr.disabled = true;
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}