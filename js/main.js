// lógica para la animación

let text = document.getElementById('text');
let word = document.getElementsByTagName('span');

let i = 0;

function cambioRotativo() {
	word[i].style.display = 'none';
	i = (i + 1) % word.length;
	word[i].style.display = 'initial';
}

setInterval(cambioRotativo, 1000);
