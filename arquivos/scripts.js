//Cor
var purple = '#734082'
var lightPurple = '#341E3B'
var darkPurple = '#26162a'
var $purple = '#4e2d58'
var $lightPurple = '#734082'
var $darkPurple = '#341E3B'

//Princ
var Header = document.getElementsByTagName('header')[0]
var Tema = document.querySelector('#tema')
var Abbr = document.querySelector('#abbrTema')
var Sect = document.querySelector('.contentProjects')
var Items = document.querySelectorAll('#divTextPr')
var footerAll = document.getElementsByTagName('footer')[0]
var divBoxSob = document.querySelectorAll('#boxSob')
var divBoxSub = document.querySelectorAll('#boxSub')
var cont = 1

function mudarTema() {
    cont++
    if(cont%2 == 0) {
        //header
        Header.style.backgroundColor = 'black'
        Header.style.color = 'white'
        Tema.style.backgroundColor = 'white'
        Abbr.style.backgroundImage = 'linear-gradient(to right, white 0%, white 50%, black 50%, black 100%)'

        //section
        Sect.style.backgroundColor = 'black'
        Sect.style.color = 'white'
        for(var contItems = 0; contItems < Items.length; contItems++) {
            Items[contItems].style.color = 'white'
        }

        //footer
        footerAll.style.backgroundColor = darkPurple

        //Parte em desenvolvimento
        // for(var contCor = 0; contCor < 2; contCor++) {
        //     divBoxSob.style.backgroundColor = purple
        //     divBoxSub.style.backgroundColor = lightPurple
        // }
    } else {
        //header
        Header.style.backgroundColor = 'white'
        Header.style.color = '#1a1a1a'
        Tema.style.backgroundColor = 'black'
        Abbr.style.backgroundImage = 'linear-gradient(to right, black 0%, black 50%, white 50%, white 100%)'

        //section
        Sect.style.backgroundColor = 'white'
        Sect.style.color = 'black'
        for(var contItemsS = 0; contItemsS < Items.length; contItemsS++) {
            Items[contItemsS].style.color = 'black'
        }

        //footer
        footerAll.style.backgroundColor = $darkPurple

        //Parte em desenvolvimento
        // for(var $contCor = 0; $contCor < 2; $contCor++) {
        //     divBoxSob.style.backgroundColor = $purple
        //     divBoxSub.style.backgroundColor = $lightPurple
        // }
    }
}
