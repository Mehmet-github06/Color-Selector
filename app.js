function RandomColor(){
    let items= "0123456789ABCDEF"
    let color= "#"
    for (let i=0 ; i<6; i++){
        color+= items[Math.floor(Math.random()*16)];
    }
    return color;

}


const main = document.querySelector(".bgDiv")
const inputbox=document.querySelector("#colorInput")
const colorno= document.querySelector("#colorText")
const clipboard=document.querySelector("#coppy")
const h1 =document.getElementById("baslik")


document.getElementById("ColorButton").addEventListener("click", () => {
   
    h1.style.color=inputbox.value= main.style.backgroundColor=colorno.textContent=RandomColor()
    
})



document.getElementById("mouseover").addEventListener("mouseover", () => {
   
h1.style.color=inputbox.value= main.style.backgroundColor=colorno.textContent=RandomColor()

    
})

window.addEventListener('load',()=>{
    inputbox.value= main.style.backgroundColor=colorno.textContent=RandomColor()
});
 

inputbox.addEventListener("input",()=>{
   
    colorno.innerText = inputbox.value
    const selectColor = inputbox.value;
    
    main.style.backgroundColor = selectColor
    
 })


 if (event.code === "Enter") {
    
    addButton.RandomColor()
  }

  clipboard.addEventListener('click',()=>{

    navigator.clipboard.writeText(colorno.innerText)
 
    
 })