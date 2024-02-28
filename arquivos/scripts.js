var Header = document.getElementsByTagName('header')[0]
var Tema = document.querySelector('#tema')
var Abbr = document.querySelector('#abbrTema')
var Sect = document.querySelector('.contentProjects')
var Items = document.querySelectorAll('#divTextPr')
var cont = 1

function mudarTema() {
    cont++
    if(cont%2 == 0) {
        //header
        Header.style.backgroundColor = '#1a1a1a'
        Header.style.color = 'white'
        Tema.style.backgroundColor = 'white'
        Abbr.style.backgroundImage = 'linear-gradient(to right, white 0%, white 50%, #1a1a1a 50%, #1a1a1a 100%)'

        //section
        Sect.style.backgroundColor = '#1a1a1a'
        Sect.style.color = 'white'
        for(var contItems = 0; contItems < Items.length; contItems++) {
            Items[contItems].style.color = 'white'
        }
    } else {
        //header
        Header.style.backgroundColor = 'white'
        Header.style.color = '#1a1a1a'
        Tema.style.backgroundColor = '#1a1a1a'
        Abbr.style.backgroundImage = 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 50%, white 50%, white 100%)'

        //section
        Sect.style.backgroundColor = 'white'
        Sect.style.color = '#1a1a1a'
        for(var contItemsS = 0; contItemsS < Items.length; contItemsS++) {
            Items[contItemsS].style.color = '#1a1a1a'
        }
    }
}
