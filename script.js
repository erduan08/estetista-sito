const bottoneAvanti1 = document.querySelector('.button-avanti1');
const bottoneAvanti2 = document.querySelector('.button-avanti2');
const bottoneIndietro1 = document.querySelector('.button-indietro1');
const bottoneIndietro2 = document.querySelector('.button-indietro2');

const scheda1 = document.getElementById('scheda1')
const scheda2 = document.getElementById('scheda2')
const scheda3 = document.getElementById('scheda3')
const scheda4 = document.getElementById('scheda4')

const immagine1 = document.getElementById('immagine1')
const immagine2 = document.getElementById('immagine2')
const immagine3 = document.getElementById('immagine3')
const immagine4 = document.getElementById('immagine4')

const ChiSono = document.getElementById('ChiSono')


bottoneAvanti1.addEventListener('click', function () {
    // se clicco bottoneAvanti se scheda1 e visibile la nascondo e mostro scheda4
    if (scheda1.classList.contains('visibile')) {
        scheda1.classList.remove('visibile');
        scheda1.classList.add('nascosto');
        scheda4.classList.remove('nascosto');
        scheda4.classList.add('visibile');
    }
})

bottoneIndietro1.addEventListener('click', function () {
    if (scheda4.classList.contains('visibile')) {
        scheda4.classList.remove('visibile');
        scheda4.classList.add('nascosto');
        scheda1.classList.remove('nascosto');
        scheda1.classList.add('visibile');
    }
})

bottoneAvanti2.addEventListener('click', function () {
    if (immagine1.classList.contains('visibile')) {
        immagine1.classList.remove('visibile');
        immagine1.classList.add('nascosto');
        immagine4.classList.remove('nascosto');
        immagine4.classList.add('visibile');
    }
})

bottoneIndietro2.addEventListener('click', function () {
    if (immagine4.classList.contains('visibile')) {
        immagine4.classList.remove('visibile');
        immagine4.classList.add('nascosto');
        immagine1.classList.remove('nascosto');
        immagine1.classList.add('visibile');
    }
})





















