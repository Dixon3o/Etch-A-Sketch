const cdiv = document.querySelector(".container");

function makeGrid(size){
    for(let i = 0; i<size; i++){
        for(let j = 0; j<size; j++){
            let div = document.createElement('div');
            div.classList.add('cell');
            cdiv.appendChild(div);
        }
    }
}
makeGrid(16);

cdiv.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = 'black';
})