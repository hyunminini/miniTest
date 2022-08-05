const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");


for(let i in btns){
    btns[i].addEventListener("click", (e) => {
        for(let element of btns) {
            element.classList.remove("on")
        };
        btns[i].classList.add('on');
        for(let element of boxs) {
            element.classList.remove("on")
        };
        boxs[i].classList.add('on');
    })
}

