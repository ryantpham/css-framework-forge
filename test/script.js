const container = document.querySelector('.container')

for(i = 0; i<256; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square);
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor = 'red';
    });
}


