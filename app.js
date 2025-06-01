const color = ["red", "green", ,"blue","white","gray","pink","skyblue","orange","voilet"];
const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random()*color.length);
    document.body.style.backgroundColor = color[randomNumber];
    span.textContent = color[randomNumber];
});
