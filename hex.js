const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const  btun = document.getElementById("btn");
const  colr = document.querySelector(".color");

btun.addEventListener('click', function(){
    let randcolor = '#';
    for(let i = 0; i < 6; i++){
        randcolor += hex[getNumber()];

    }
    document.body.style.backgroundColor = randcolor ;
    colr.textContent = randcolor;
});

function getNumber(){
    return Math.floor(Math.random()*hex.length);
}