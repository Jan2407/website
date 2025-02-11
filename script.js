function when_over(x){
    x.style.borderColor = "black";
    x.style.borderWidth = "10px"; //Nova CSS značka 3/10
    x.style.width="25%"
    let marginL = parseFloat(x.style.marginLeft) - 1.5;
    x.style.marginLeft = `${marginL}%`;
    x.style.marginTop = "0%";
}
function when_notover(x){
    x.style.borderWidth = "0px";
    x.style.width="22%"
    x.style.borderColor = "white";
    let marginL = parseFloat(x.style.marginLeft) + 1.5;
    x.style.marginLeft = `${marginL}%`;
    x.style.marginTop = "1.5%";
}
/*
function transition(x){
    x.innerHTML =
    `
        <img src="./slike/pic5.webp" class="card-img-top" alt="...">
    `
    x.style.width="400px";
}
*/
