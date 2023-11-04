const randomRenk = function () {
  const harfler = "0123456789ABCDEF";
  let ilk = "#";
  for (let i = 0; i < 6; i++) {
    ilk += harfler[Math.floor(Math.random() * 16)];
  }
  return ilk;
};

console.log(randomRenk());

const main = document.querySelector(".bgDiv");
const clickButon = document.querySelector(".btn-click");
const mouseoverButon = document.querySelector(".btn-over");
const colorİnput = document.getElementById("colorInput");
const pRenk = document.getElementById("colorText");
const h1 = document.querySelector(".h1");
const copy = document.querySelector(".fa-clipboard");


const ortakAlan = function () {
  main.style.backgroundColor =
    colorİnput.value =
    pRenk.textContent =
    h1.style.color =
      randomRenk();
};

clickButon.addEventListener("click", () => {
    ortakAlan()
});

mouseoverButon.addEventListener("mouseover", () => {
    ortakAlan()
});

colorİnput.addEventListener("input",()=>{
    main.style.backgroundColor=h1.style.color=pRenk.textContent.toUpperCase=colorİnput.value
})

document.addEventListener("keydown",(event)=>{
    if(event.code ==="Enter" || "NumpadEnter"){
        ortakAlan()
    }
})

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(pRenk.textContent).then(()=>{
        alert("renk kopyalandı")
    })
})

window.addEventListener("load",()=>{
    ortakAlan()
    document.write
})
