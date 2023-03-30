function cambiarTitulo(){
    console.log(`Desde cambiar titulo`);
    //traer el h1 del html
    let titulo = document.querySelector(`h1`);
    let titulo2 = document.querySelector(`.container`);
    let titulo3 = document.querySelector(`#nombreId`);
    let titulo4 = document.getElementsByTagName(`h1`);
    let titulo5 = document.getElementById(`titulo-principal`);
    let titulo6 = document.getElementsByClassName(`container`);
    console.log(titulo.className);
    titulo.className = 'text-primary';
    titulo.innerHTML = 'Nuevo titulo de <b>JS</b>'; //No usar en inputs
    titulo.innerText = 'Nuevo titulo de JS';
}