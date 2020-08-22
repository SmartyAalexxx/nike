
let size = document.getElementsByClassName("sizes__link");
console.log(size);
let img = document.querySelector(".card__img");
// console.log(img);
let atr = size[0].getAttribute("data-size");
console.log(atr);


//     size.onclick = function (event){
    //         if (this.className != '.sizes__link') return
    //          alert("Work!")
    //     };
    // size.addEventListener('click', );
    console.log(size.length);
    for(let i = 0; i < size.lenght; i++){
        console.log(i);
        size[i].addEventListener("click", function(){ alert(this); });
    }
    
    function doSomething(){
        atr = this.size.getAttribute("data-size");
        console.log(event.target);
        console.log(atr);
        let i = atr;    
    if (i==10){
        img.style.transform = "translate(-50%, -56%) scale(1)";
        console.log(i);

        } else if (i==9){
            img.style.transform = "translate(-50%, -56%) scale(0.9)";
        console.log(i);

        } else if (i==8) {
            img.style.transform = "translate(-50%, -56%) scale(0.8)";
        console.log(i);

        }else if (i==7){
            img.style.transform = "translate(-50%, -56%) scale(0.7)";
        console.log(i);

        }else if (i==11){
            img.style.transform = "translate(-50%, -56%) scale(1.1)";
        console.log(i);

        } else { console.log("Not start / gived I")}

    }    

// switch (size){
//     case "7": 
//     document.body.style.transform = "scale(0.8)";
//     break;
//     default: "10"
    
// }


// при нажатие на размер(.size__link) меняется
// увеличивается картинка(.card__img {style trasform: scale()})
// .style.transform= "translate(-50%, -56%) scale(1)"
//
// найти класс в ДОМ-дереве, отследить событие клика, получить в ДЖ дата-аттрибут, 
// применить стиль к классу
// 
//
// $0.getAttribute("data-size") -> "8"
// $0 - это элемент, который должен быть выбран при клике


        
//}
// 
//
//
