const p = document.querySelector(".desc");
p.addEventListener("click" , ()=> {
    console.log("Clicked")
    p.classList.toggle("clicked")
})
console.log(p)