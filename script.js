const cdiv = document.querySelector(".container");

let resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Grid';

document.body.insertBefore(resetBtn, cdiv);
function makeGrid(size){
    for(let i = 0; i<size; i++){
        for(let j = 0; j<size; j++){
            let div = document.createElement('div');
            div.classList.add('cell');
            div.style.width = `${960 / size}px`;
            div.style.height = `${960 / size}px`;
            div.style.border = '1px solid black';
            cdiv.appendChild(div);
        }
    }
}
makeGrid(100);

cdiv.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = 'black';
})

function reset() {
    let n = prompt("What the next grid should be like? Maximum is 100.");
    if(n > 100){
        alert('100 is max');
    }else{
        document
            .querySelectorAll('.cell')
            .forEach((e) => e.parentNode.removeChild(e));
        makeGrid(n);
    }
}
resetBtn.addEventListener('click', ()=>{
    reset();
});
