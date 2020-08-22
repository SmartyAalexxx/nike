let size = document.getElementsByClassName("sizes__link");
console.log(size);
let img = document.querySelector(".card__img");
console.log(img);

    for(let sizeitem of size){
        sizeitem.addEventListener("click", function(){
            let atr = sizeitem.getAttribute("data-size");
            // console.log(atr);
            let i = atr;
            if (i==10){
                img.style.transform = "translate(-50%, -56%) scale(1)";
                // console.log(i);
            } else if (i==9){
                img.style.transform = "translate(-50%, -56%) scale(0.9)";
                // console.log(i);
            } else if (i==8) {
                img.style.transform = "translate(-50%, -56%) scale(0.8)";
                // console.log(i);
            }else if (i==7){
                img.style.transform = "translate(-50%, -56%) scale(0.7)";
                // console.log(i);
            }else if (i==11){
                img.style.transform = "translate(-50%, -56%) scale(1.1)";
                // console.log(i);
            } else { 
                console.log("Not started")
            }
        });
    }