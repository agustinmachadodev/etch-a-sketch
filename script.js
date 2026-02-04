let crearDivs = () => {
    
    let cantidadDivs = 256;
    
    let container = document.querySelector('.container')

    
    for(let i = 0; i < cantidadDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('item')

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        })

        container.appendChild(div)
    }
    
}

crearDivs()

