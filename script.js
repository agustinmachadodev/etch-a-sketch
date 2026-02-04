let body = document.querySelector('body');
let container = document.querySelector('.container')

let divBtn = document.createElement('div');
divBtn.classList.add('container-btn')

let btn = document.createElement('button');
btn.textContent = 'Tamaño de la Cuadricula'
btn.classList.add('btn');

divBtn.appendChild(btn);
body.insertBefore(divBtn, container)


btn.addEventListener('click', () => {
    let numero = parseInt(prompt('Ingrese un número, menor a 100'))

    if(numero > 100) {
        numero = 100;
    }

    container.innerHTML = '';
    
    crearCuadricula(numero)
}) 


const crearCuadricula = (num) => {
    
    let cantidadDivs = num * num;
    
    let tamañoDiv = 850 / num
    
    for(let i = 0; i < cantidadDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('item')

        div.style.width = tamañoDiv + 'px';
        div.style.height = tamañoDiv + 'px';
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        })
        
        container.appendChild(div)
    }
    
}

crearCuadricula(16)


