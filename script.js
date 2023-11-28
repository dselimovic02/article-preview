let arrow = document.querySelector(".arrow");
let tooltip = document.querySelector(".tooltip");
let shareImg = document.querySelector(".share-img");

shareImg.addEventListener("click", ()=>{
    arrow.style.display = "block";
    tooltip.style.display = 'flex';
});

addEventListener("mouseup", e =>{
    if(e.button == 0){
        if(arrow.style.display == "block" && tooltip.style.display == 'flex'){
            arrow.style.display = "none";
            tooltip.style.display = 'none';
        }
    }
});